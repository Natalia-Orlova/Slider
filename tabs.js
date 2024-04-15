document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () =>{
      
      tabs.forEach(tab => tab.classList.remove('active'));
      tab.classList.add('active');

      tabContents.forEach(content => content.classList.remove('active'));
    
      const target = document.getElementById(tab.dataset.tab);
      target.classList.add('active');
    });
  });
});