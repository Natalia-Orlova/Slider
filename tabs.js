
document.addEventListener('DOMContentLoaded', function() {
  const tabItems = document.querySelectorAll('.tab-button');
  console.log(tabItems);

  tabItems.forEach(function(tab) {
    // console.log(tab);
    tab.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      console.log(tabId);
      const tabContent = document.querySelector(`.tab-content[id="${tabId}"]`);
      console.log(tabContent);

      // tabItems.forEach(function(tab) {
      //   tab.classList.remove('active');
      // });

      tabItems.forEach(tab => {
        console.log(tab);
        tab.classList.remove('active');
      });

      this.classList.add('active');

      tabContent.classList.add('active');
      tabContent.classList.remove('hide');
    });
  });
});