This is my Portfolio Page.
Its the first one ive made and i created it from scratch or vibe coding. I made this to show case my knowledge on html,css, and javascript.
I've added projects ive built on the side to show what kind of editing and knowledge I have in all the areas of creating multimedia work.
I've also added on my contact page my College Certificate Ive earned along side many online courses Ive worked on through out the past few years.



  /* Homepage text */
  .chadBlincoe {
    position: static;
    top: auto;
    left: auto;
    bottom: 10px;
    font-size: 40px;
    text-align: center;
  }

  .WhatIDo {
    font-size: 20px;
    text-align: center;
  }

  .webDesigner-text,
  .htmlCssJavascript {
    position: static;
    left: auto;
    top: auto;
    transform: none;
  }

  .webDesigner-text:hover,
  .htmlCssJavascript:hover,
  .PhotoShop:hover {
    transform: translateY(-5px);
  }

  .text-right {
    margin-left: 0;
    padding-top: 0;
    text-align: center;
  }

  /* Button */
  .glow-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .glow-btn {
    margin-left: 0;
    margin-top: 20px;
    display: inline-flex;
    padding: 0.5em 1em;
    font-size: clamp(1rem, 4vw, 1.1rem);
    letter-spacing: 0.05em;
  }

  /* Homepage images */
  .myImg,
  .box2-image {
    margin: 0;
    height: auto;
    width: 100%;
    max-width: 300px;
  }

  .box3 {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .box3-image {
    flex: none;
    width: 100%;
    max-width: 420px;
  }

  /* Website redesign page */
  .grid-container {
    padding: 2rem 1rem;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .website-title {
    font-size: 2.8rem;
    width: calc(100% - 20px);
    max-width: 100%;
    height: auto;
    padding: 15px 10px;
    margin: 0 auto 20px;
    text-align: center;
    box-sizing: border-box;
  }

  .website-h2 {
    font-size: 1.5rem;
    text-align: center;
    margin: 15px 0;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .description {
    text-align: center;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .description p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 15px 0;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }

  .live-link {
    display: block;
    width: fit-content;
    margin: 15px auto;
    padding: 12px 20px;
  }

  .media {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .media img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .rebuild-clip {
    width: 100%;
    margin: 0 auto;
  }

  .rebuild-clip video,
  .rebuildVideo {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  /* Redesign row layout */
  .redesign-row,
  .redesign-row.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    margin: 0 auto 3rem;
  }

  /* First section: image above, text below */
  .redesign-row:not(.reverse) .media {
    order: 1;
  }

  .redesign-row:not(.reverse) .description {
    order: 2;
  }

  /* Second section: video above, text below */
  .redesign-row.reverse .media,
  .redesign-row.reverse .rebuild-clip {
    order: 1;
  }

  .redesign-row.reverse .description {
    order: 2;
  }
  /* contact page*/
  .contact-form-container {
    flex-direction: column;
    width: 100%;
  }

  .form-side,
  .certificate-side {
    flex: 1 1 100%;
    min-width: 100%;
    width: 100%;
  }

  .contact-heading {
    width: 100%; /* Remove fixed width on mobile */
    max-width: 480px;
  }