---
export const prerender = false;
---

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Находим все якорные ссылки
  const anchors = document.querySelectorAll('a[href^="#"]');
  
  // Для каждой якорной ссылки добавляем обработчик события
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Получаем ID целевого элемента из href
      const targetId = this.getAttribute('href');
      
      // Если это просто "#", пропускаем
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Добавляем задержку для мобильных устройств
        setTimeout(function() {
          // Рассчитываем позицию с учетом отступа
          const headerOffset = 80; // Подстройте под высоту вашего хедера
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          // Прокручиваем к элементу
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // Небольшая задержка для стабильности
      }
    });
  });
});
</script>