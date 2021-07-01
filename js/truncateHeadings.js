
// -------------------------------------- TRUNCATE CODE -------------------------------------- //
if ($(window).width() < 960) {
  new Cuttr('.sfn-news-boxes--featured h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--medium-heading h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--big-heading h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--horizontal h3', { truncate: 'words', length: 8 });
  new Cuttr('.sfn-news-box--sidebar-long h3', { truncate: 'words', length: 8 });

  new Cuttr('.sfn-featured-newsbox__title h2', { truncate: 'words', length: 10 });
  new Cuttr('.sfn-featured-newsbox__excerpt', { truncate: 'words', length: 38 });
  
  new Cuttr('.sfn-box-video__content h3', { truncate: 'words', length: 6 });
  
  new Cuttr('.truncate-excerpt', { truncate: 'words', length: 18 });
  new Cuttr('.truncate-excerpt--long', { truncate: 'words', length: 27 });
} else {
  new Cuttr('.sfn-news-boxes--featured .sfn-news-box__title h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--medium-heading .sfn-news-box__title h3', { truncate: 'words', length: 8 });
  new Cuttr('.sfn-news-box--big-heading .sfn-news-box__title h3', { truncate: 'words', length: 8 });
  new Cuttr('.sfn-news-box--horizontal .sfn-news-box__title h3', { truncate: 'words', length: 12 });
  new Cuttr('.sfn-news-box--def-vertical .sfn-news-box__title h3', { truncate: 'words', length: 16 });
  new Cuttr('.sfn-news-box--sidebar-long h3', { truncate: 'words', length: 11 });

  new Cuttr('.sfn-featured-newsbox__title h2', { truncate: 'words', length: 9 });
  new Cuttr('.sfn-featured-newsbox__excerpt', { truncate: 'words', length: 38 });
  
  new Cuttr('.sfn-box-video__content h3', { truncate: 'words', length: 6 });
  
  new Cuttr('.truncate-excerpt', { truncate: 'words', length: 18 });
  new Cuttr('.truncate-excerpt--long', { truncate: 'words', length: 27 });
}