
// Initialize Lucide icons when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create all Lucide icons found in the document
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
