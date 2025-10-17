import { getResource } from '../../../lib/mdx';
import Link from 'next/link';
import fs from 'node:fs/promises';
import path from 'node:path';

// Prebuild all MDX slugs for static export
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const contentDir = path.join(process.cwd(), 'content');
  const files = await fs.readdir(contentDir);
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace(/\.mdx$/i, '') }));
}

// Use a simple local type. Do NOT import or use PageProps from 'next'.
type Props = {
  params: { slug: string };
  // searchParams?: Record<string, string | string[] | undefined>; // optional
};

export default async function ResourcePage({ params }: Props) {
  const { mdx } = await getResource(params.slug);

  return (
    <div className="page active">
      <div className="resource-hero">
        <div className="container">
          <h1>{params.slug.replace('-', ' ').toUpperCase()}</h1>
          <p>Comprehensive guidance on UK {params.slug.replace('-', ' ')}</p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/resources">Resources</Link>
            <span>›</span>
            <span>{params.slug.replace('-', ' ')}</span>
          </div>
        </div>
      </div>

      <div className="resource-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">{mdx}</div>
            <div className="sidebar">
              <div className="sidebar-section">
                <h3>Quick Links</h3>
                <ul className="sidebar-links">
                  <li>
                    <a href="#">
                      Tax Rates &amp; Allowances <span className="update-badge">NEW</span>
                    </a>
                  </li>
                  <li><a href="#">Calculators</a></li>
                  <li><a href="#">Loss Relief Options</a></li>
                </ul>
              </div>
              <div className="sidebar-section">
                <h3>Latest Updates</h3>
                <ul className="sidebar-links">
                  <li><a href="#">Budget changes</a></li>
                  <li><a href="#">HMRC guidance updates</a></li>
                  <li><a href="#">Recent case law</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
