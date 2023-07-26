'use strict';

const init = () => {

  const body = document.querySelector('body');

  const header = document?.querySelector('header');
  const navbar = document?.querySelector('.navbar');
  const inner = document?.querySelector('._inner');
  const search = document?.getElementById('search');

  search.onfocus = () => {
    header.classList.add('_s-active');
  };

  search.onblur = () => {
    header.classList.remove('_s-active');
  };


  inner.addEventListener( 'mouseenter', () => {
    navbar.classList.add('_show');
    },
  );
  
  navbar.addEventListener( 'mouseleave', () => {
      navbar.classList.remove('_show');
    },
  );


  // header mobile menu
  const burger = document.querySelector('.burger');

  burger?.addEventListener('click', () => {
    burger.classList.toggle('_active');
    navbar.classList.toggle('_visible');
    return;
  });

  //modal window
  const modal = document?.querySelector('.modal');
  const closeButton = document?.querySelector('.modal__close-btn');
  
  setTimeout(() => modal?.classList.remove('hidden'), '100');

  function toggleModal() {
    modal.classList.toggle('_show');
    body.classList.toggle('o-hidden');
  }

  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
      }
  }

  document?.querySelectorAll(".btn-modal").forEach(btn =>
      btn.addEventListener('click', (e) => { 
      toggleModal();
      e.preventDefault();
    })
  )

  closeButton?.addEventListener('click', toggleModal);
  window.addEventListener('click', windowOnClick);


  // toTop button & search blur on scroll
  const toTopBtn = document.querySelector('.totop');

  window.onscroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      toTopBtn.classList.add('_visible');
    } else {
      toTopBtn.classList.remove('_visible');
    }
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      search.blur();
      header.classList.remove('_s-active');
    }
  }
  
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  });

  // procedures
  const procSection = document?.querySelector(".promo-select");
  const procParent = procSection.closest('.promo__text');
  const procLinks = document?.querySelectorAll(".link-procedures");
  procLinks.forEach(link =>
    link.addEventListener( 'mouseenter', () => {
      procLinks.forEach(link => {
        link.classList.remove('_active');
      })
      link.classList.add('_active');
      procParent.classList.add('_show');
    })
  );

  function procClear() {
    procLinks.forEach(link => {
      link.classList.remove('_active');
    })
    procParent.classList.remove('_show');
  }

  function clickOutside(el, cb) {
    document.addEventListener('click', event => {
      if (!el.contains(event.target)) cb();
    });
  };

  clickOutside(procSection, () => procClear());


  // load more
  const loadMore = document?.querySelector('.load__btn'); 

  function loadedContent() {
    const section = document?.querySelector('.load');
    const maxItems = 4;
    const loadItems = 4;
    const section6 = document?.querySelector('.load-6');
    const maxItems6 = 6;
    const loadItems6 = 6;
    const hiddenClass = "hidden";

    if(section) {
      
      const items = Array.from(section.querySelectorAll(".load__item"));

      items.forEach(function (item, index) {
        if (index > maxItems - 1) {
          item.classList.add(hiddenClass);
        }
      });

      loadMore.addEventListener("click", (e) => {
        e.preventDefault();
        [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
          item,
          index
        ) {
          if (index < loadItems) {
            item.classList.remove(hiddenClass);
          }

          if (document.querySelectorAll("." + hiddenClass).length === 0) {
            loadMore.style.display = "none";
          }
        });
      });
    }
    
    if(section6) {
      
      const items6 = Array.from(section6.querySelectorAll(".load__item"));

      items6.forEach(function (item, index) {
        if (index > maxItems6 - 1) {
          item.classList.add(hiddenClass);
        }
      });

      loadMore.addEventListener("click", (e) => {
        e.preventDefault();
        [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
          item,
          index
        ) {
          if (index < loadItems6) {
            item.classList.remove(hiddenClass);
          }

          if (document.querySelectorAll("." + hiddenClass).length === 0) {
            loadMore.style.display = "none";
          }
        });
      });
    }
  }

  if(loadMore) {
    loadedContent();
  }

  // tabs
  const tabs = document?.querySelectorAll('[data-tab-target]');
  const tabContents = document?.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('_active');
      })
      tabs.forEach(tab => {
        tab.classList.remove('_active');
      })
      tab.classList.add('_active');
      target.classList.add('_active');
    })
  });

  // svg plan click

  const paths = document?.querySelectorAll('path.room');

  for (let i=0; i<paths.length; i++) {
    paths[i].addEventListener('click', displayGallery);
  }
  
  function displayGallery(e) {
    let name = e.target.dataset.name;
    document.getElementById(name).click();
  }


  // answer toggle
  document.querySelectorAll(".answer__item").forEach(box =>
    box.addEventListener('click', () => box.classList.toggle('_open'))
  );


  // tags active
  document?.querySelectorAll(".tags__item").forEach(tag =>
    tag.addEventListener('click', () => tag.classList.toggle('_active'))
  );

}

if (document.readyState !== 'loading') init()
else document.addEventListener('DOMContentLoaded', init);