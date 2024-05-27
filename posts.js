// lib/posts.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).map(fileName => fileName.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
  
    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();
  
    return {
      slug,
      content: htmlContent,
      ...data,
    };
  } catch (error) {
    console.error(`Error reading file for slug '${slug}':`, error);
    return null;
  }
}
