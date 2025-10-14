import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentDir = path.join(process.cwd(), 'content');

export async function getResource(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf8');
  const { content, data } = matter(raw);
  const { content: mdx } = await compileMDX({ source: content, options: { parseFrontmatter: false } });
  return { mdx, data };
}
