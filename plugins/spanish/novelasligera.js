const cheerio = require('cheerio');
const fetchApi = require('@libs/fetchApi');
const fetchFile = require('@libs/fetchFile');
const languages = require('@libs/languages');

const baseUrl = 'https://novelasligera.com/';

async function popularNovels (page) {
  let url = baseUrl;

  const result = await fetchApi(url);
  const body = await result.text();

  let loadedCheerio = cheerio.load(body);

  let novels = [];

  loadedCheerio('.elementor-column').each(function () {
    const novelName = loadedCheerio(this)
      .find('.widget-image-caption.wp-caption-text')
      .text();
    if (novelName) {
      const novelCover = loadedCheerio(this).find('a > img').attr('data-lazy-src');

      let novelUrl = loadedCheerio(this).find('a').attr('href');

      const novel = {
        name: novelName,
        cover: novelCover,
        url: novelUrl,
      };

      novels.push(novel);
    }
  });

  return novels;
};

async function parseNovelAndChapters ( novelUrl) {
  const url = baseUrl + 'novela/' + novelUrl;

  // console.log(url);

  const result = await fetchApi(url);
  const body = await result.text();

  let loadedCheerio = cheerio.load(body);

  let novel = {};

  novel.url = url;

  novel.name = loadedCheerio('h1').text();

  novel.cover = loadedCheerio('.elementor-widget-container')
    .find('img')
    .attr('src');

  loadedCheerio('.elementor-row')
    .find('p')
    .each(function () {
      if (loadedCheerio(this).text().includes('Autor:')) {
        novel.author = loadedCheerio(this).text().replace('Autor:', '').trim();
      }
      if (loadedCheerio(this).text().includes('Estado:')) {
        novel.status = loadedCheerio(this)
          .text()
          .replace('Estado: ', '')
          .trim();
      }

      if (loadedCheerio(this).text().includes('Género:')) {
        loadedCheerio(this).find('span').remove();
        novel.genres = loadedCheerio(this).text().replace(/,\s/g, ',');
      }
    });

  novel.artist = null;

  novel.summary = loadedCheerio(
    '.elementor-text-editor.elementor-clearfix',
  ).text();

  let novelChapters = [];

  loadedCheerio('.elementor-accordion-item').remove();

  loadedCheerio('.elementor-tab-content')
    .find('li')
    .each(function () {
      const chapterName = loadedCheerio(this).text();
      const releaseDate = null;
      const chapterUrl = loadedCheerio(this)
        .find('a')
        .attr('href')

      const chapter = { name: chapterName, releaseTime: releaseDate, url: chapterUrl };

      novelChapters.push(chapter);
    });

  novel.chapters = novelChapters;

  return novel;
};

async function parseChapter (chapterUrl) {
  const url = chapterUrl;
  // console.log(url);

  const result = await fetchApi(url);
  const body = await result.text();

  let loadedCheerio = cheerio.load(body);
  loadedCheerio('.osny-nightmode.osny-nightmode--left').remove();
  loadedCheerio('.code-block.code-block-1').remove();
  loadedCheerio('.adsb30').remove();
  loadedCheerio('.saboxplugin-wrap').remove();
  loadedCheerio('.wp-post-navigation').remove();

  let chapterText = loadedCheerio('.entry-content').html();
  return chapterText;
};

async function searchNovels  (searchTerm) {
  const url = baseUrl + '?s=' + searchTerm + '&post_type=wp-manga';
  // console.log(url);

  const result = await fetchApi(url);
  const body = await result.text();

  let loadedCheerio = cheerio.load(body);

  let novels = [];

  loadedCheerio('.inside-article').each(function () {
    const novelCover = loadedCheerio(this).find('img').attr('src');
    let novelUrl = loadedCheerio(this).find('a').attr('href');

    let novelName;

    if (novelUrl) {
      novelName = novelUrl.replace(/-/g, ' ').replace(/^./, function (x) {
        return x.toUpperCase();
      });
    }

    novelUrl += '/';

    const novel = {
      name: novelName,
      cover: novelCover,
      url: novelUrl,
    };

    novels.push(novel);
  });

  novels = [{ ...novels[1] }];

  return novels;
};

module.exports = {
    id: "ligera.com",
    name: "Novelas Ligera",
    site: baseUrl,
    version: '1.0.0',
    lang: languages.Spanish,
    icon: 'src/es/novelasligera/icon.png',
    popularNovels,
    parseNovelAndChapters,
    parseChapter,
    searchNovels,
    fetchImage: fetchFile,
};
