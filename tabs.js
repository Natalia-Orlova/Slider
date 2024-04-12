const tabs = document.querySelectorAll('#tabs .tab-button');
const tabContents = document.querySelectorAll('#tab-content .tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    console.log('click');
    // Remove active class from all tabs and tab contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding tab content
    tab.classList.add('active');
    tabContents[index].classList.add('active');
  });
});