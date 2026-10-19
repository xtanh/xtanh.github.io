(function () {
    "use strict";
    var buttons = Array.from(document.querySelectorAll('[data-blog-tag]'));
    if (!buttons.length) return;
    var posts = Array.from(document.querySelectorAll('[data-blog-post]'));
    var status = document.getElementById('blog-filter-status');
    function render() {
        var tag = new URLSearchParams(window.location.search).get('tag') || '';
        var count = 0;
        posts.forEach(function (post) {
            var tags = JSON.parse(post.dataset.tags) || [];
            post.hidden = Boolean(tag) && !tags.includes(tag);
            if (!post.hidden) count++;
        });
        document.querySelectorAll('[data-blog-year]').forEach(function (year) {
            year.hidden = !Array.from(year.querySelectorAll('[data-blog-post]')).some(function (post) { return !post.hidden; });
        });
        buttons.forEach(function (button) {
            var selected = button.dataset.blogTag === tag;
            button.classList.toggle('active', selected);
            button.setAttribute('aria-pressed', String(selected));
        });
        status.textContent = tag ? tag + ' · ' + count + (count === 1 ? ' post' : ' posts') : '';
    }
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var url = new URL(window.location.href);
            if (button.dataset.blogTag) url.searchParams.set('tag', button.dataset.blogTag);
            else url.searchParams.delete('tag');
            window.history.pushState(null, '', url);
            render();
        });
    });
    window.addEventListener('popstate', render);
    render();
})();
