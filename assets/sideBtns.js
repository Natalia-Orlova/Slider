'use strict';
    var multiItemSlider = (function () {
      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.itc-slider-btn'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.itc-slider-btn-prev'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.itc-slider-btn-next'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов

        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getItemMin: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position < _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getItemMax: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position > _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getMin: function () {
            return _items[position.getItemMin()].position;
          },
          getMax: function () {
            return _items[position.getItemMax()].position;
          }
        }

        var _transformItem = function (direction) {
          var nextItem;
          if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
              nextItem = position.getItemMin();
              _items[nextItem].position = position.getMax() + 1;
              _items[nextItem].transform += _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
          }
          if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
              nextItem = position.getItemMax();
              _items[nextItem].position = position.getMin() - 1;
              _items[nextItem].transform -= _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('itc-slider-btn')) {
            e.preventDefault();
            var direction = e.target.classList.contains('itc-slider-btn-next') ? 'right' : 'left';
            _transformItem(direction);
          }          
        };

        var _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обработчика _controlClick для событя click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        }

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }

      }
    }());


    //инициализация слайдеров
    document.querySelectorAll('.sliderSideBtns').forEach((item, index) => {
      item.setAttribute('slider-id', index);
      multiItemSlider('[slider-id="'+ index +'"]');
    })



// для свайпера

//     const container = document.querySelector('.swiper-container');
// const wrapper = document.querySelector('.swiper-wrapper');
// const slides = document.querySelectorAll('.swiper-slide');
// let isDragging = false;
// let startPosition = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;

// container.addEventListener('mousedown', startDrag);
// container.addEventListener('mouseup', endDrag);
// container.addEventListener('mouseleave', endDrag);
// container.addEventListener('mousemove', drag);

// function startDrag(e) {
//     startPosition = e.clientX;
//     isDragging = true;
//     prevTranslate = currentTranslate;
// }

// function endDrag() {
//     isDragging = false;
// }

// function drag(e) {
//     if (isDragging) {
//         const currentPosition = e.clientX;
//         currentTranslate = prevTranslate + currentPosition - startPosition;
//         wrapper.style.transform = `translateX(${currentTranslate}px)`;
//     }
// }