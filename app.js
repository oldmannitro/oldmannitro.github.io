/* @licstart
 *
 * This file is part of oldmannitro.github.io.
 * A simple blog.
 *
 * Copyright (C) 2025 oldmannitro
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @licend
 */
document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');

    // This is a placeholder for where you would fetch your posts from.
    // For a simple GitHub Pages site, you can list your posts here.
    const posts = [
        { title: 'My First Post', file: 'posts/post1.html' },
        // Add more posts here
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postTitle = document.createElement('h2');
        const postLink = document.createElement('a');
        postLink.href = post.file;
        postLink.textContent = post.title;
        postTitle.appendChild(postLink);

        postElement.appendChild(postTitle);
        postsContainer.appendChild(postElement);
    });
});