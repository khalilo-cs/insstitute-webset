// ✅ فتح نافذة Modal وتحميل محتواها عبر Ajax
function openModal(id) {
  const modal = new bootstrap.Modal(document.getElementById(id));
  const contentId = id + 'Content';
  const file = id === 'modalCourse' ? 'html/modal-course.html' : 'html/modal-news.html';

  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(contentId).innerHTML = html;
      modal.show();
    });
}

// ✅ التحقق من نموذج التسجيل
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const toast = new bootstrap.Toast(document.getElementById('liveToast'));
  toast.show();
});
