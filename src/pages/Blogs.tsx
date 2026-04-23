import { useState } from "react";
import "../styles/Blogs.css";

type BlogPost = {
  id: number;
  category: string;
  title: string;
  description: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posts: BlogPost[] = [
    {
      id: 1,
      category: "Featured",
      title: "Why Setting Up Jupyter Notebook for Machine Learning Is So Difficult",
      description:
        "Many users struggle with CUDA, cuDNN, and TensorFlow compatibility. This article explains why setup becomes frustrating and how automation can solve it.",
      content: `# Why Setting Up Jupyter Notebook for Machine Learning Is So Difficult

## Introduction
Jupyter Notebook is widely used by students and developers for machine learning and AI work. Even though the notebook itself is easy to start, the full setup becomes difficult when GPU support is required.

## The Main Problem
Users often need to install CUDA, cuDNN, TensorFlow, and other dependencies manually. These tools must match each other correctly. If the versions do not match, users face installation errors, broken environments, and wasted time.

## Why This Causes Problems
Manual setup usually creates several issues:
- Version mismatch between CUDA and TensorFlow
- Missing drivers or unsupported GPU configuration
- Errors during package installation
- Different setup steps for different operating systems
- Time lost fixing problems instead of learning or building

## Why Students and Developers Need a Better Solution
Students who are learning machine learning often want to start quickly. Developers also need stable environments so they can focus on models, data, and notebooks instead of spending hours debugging setup issues.

## A Better Approach
A better solution is to automate the environment. Instead of installing everything manually, users can start from a prepared setup that already includes the required tools and dependencies.

## What Our Toolkit Aims to Do
Our project focuses on making Jupyter Notebook setup easier by:
1. Creating a ready-to-use environment with Docker
2. Launching Jupyter Notebook automatically in the browser
3. Reducing manual configuration work
4. Supporting a smoother machine learning workflow

## Conclusion
The difficulty is not Jupyter Notebook itself. The real problem is the environment around it. By automating setup, users can spend less time fixing systems and more time learning, experimenting, and building projects.`,
      author: "Admin Team",
      date: "April 23, 2026",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      category: "Guides",
      title: "How Docker Makes Jupyter Notebook Setup Easier",
      description:
        "Docker helps create a consistent environment for machine learning tools and reduces the risk of installation and compatibility problems.",
      content: `# How Docker Makes Jupyter Notebook Setup Easier

## Introduction
Docker helps package an application and all of its dependencies inside a container. For machine learning work, this means users can avoid many manual installation steps.

## Why Docker Is Useful
Instead of installing every dependency separately, Docker allows users to run a prepared environment. This can include:
- CUDA support
- cuDNN
- TensorFlow
- Python packages
- Jupyter Notebook

## Key Benefits
### Consistency
The same environment can run on different systems without changing the setup steps.

### Reduced Errors
Since dependencies are already prepared together, users do not need to worry as much about version mismatch problems.

### Faster Setup
Users can start more quickly because they do not need to install and configure everything manually.

### Easier Maintenance
Changes can be managed by updating the Docker image instead of reinstalling tools again and again.

## Example Workflow
1. Install Docker
2. Download the project
3. Run the container
4. Open Jupyter Notebook in the browser

## Why It Fits Our Project
Our toolkit uses Docker because it gives users a simpler and more reliable way to start working. This is especially useful for students and developers who want to focus on notebooks and machine learning instead of environment troubleshooting.

## Conclusion
Docker is one of the most practical ways to simplify Jupyter Notebook setup. It makes the environment more stable, repeatable, and user friendly.`,
      author: "Admin Team",
      date: "April 23, 2026",
      readTime: "4 min read",
    },
    {
      id: 3,
      category: "Productivity",
      title: "Why Automatic Notebook Launch Improves Workflow",
      description:
        "Opening Jupyter Notebook automatically after setup saves time, removes extra steps, and creates a smoother user experience.",
      content: `# Why Automatic Notebook Launch Improves Workflow

## Introduction
After environment setup, users still need to manually start Jupyter Notebook and open it in the browser. Even though this seems simple, it adds extra steps to the workflow.

## The Manual Process
Without automation, users often need to:
- Open a terminal
- Navigate to the correct folder
- Start Jupyter Notebook manually
- Copy the local address
- Open it in the browser

## Why This Matters
For repeated use, these small steps become repetitive. New users may also be confused by terminal commands and local URLs.

## Benefits of Auto Launch
### Simpler User Experience
Users do not need to remember commands.

### Faster Start
The notebook becomes available immediately after setup.

### Better Accessibility
Students and beginners can start using the tool without technical confusion.

### More Professional Workflow
Automatic launch makes the platform feel smoother and more complete.

## Role in Our Project
Our toolkit aims to reduce unnecessary manual work. Automatic notebook launch supports that goal by making the transition from setup to real use much easier.

## Conclusion
A smoother launch process helps users focus on actual work instead of setup steps. This is an important part of making the toolkit practical and user friendly.`,
      author: "Admin Team",
      date: "April 23, 2026",
      readTime: "4 min read",
    },
    {
      id: 4,
      category: "Updates",
      title: "Project Progress: Main Features We Are Building",
      description:
        "This update explains the key features of the project and how they support students and developers using Jupyter Notebook.",
      content: `# Project Progress: Main Features We Are Building

## Introduction
Our project is focused on simplifying Jupyter Notebook setup and workflow management for machine learning users.

## Core Features
### Automatic Environment Setup
The system creates a prepared Docker environment that includes the required dependencies.

### Notebook Auto Launch
Jupyter Notebook opens automatically in the browser once the environment is ready.

### Auto GitHub Commit
The system detects file changes and helps automate commits to GitHub.

## Why These Features Matter
These features reduce setup complexity, save time, and improve workflow efficiency. Users do not need to repeat the same manual tasks again and again.

## Current Direction
The current focus is on building a working prototype that shows:
- a simple frontend interface
- backend support
- Docker-based environment setup
- notebook launch flow
- GitHub workflow support

## Success Goals
We want the prototype to:
1. Run successfully
2. Open Jupyter Notebook without issue
3. Support automatic workflow features
4. Be simple enough for regular users to understand

## Conclusion
The project is designed to solve real setup problems. The more we automate, the more useful the toolkit becomes for students and developers.`,
      author: "Admin Team",
      date: "April 23, 2026",
      readTime: "3 min read",
    },
    {
      id: 5,
      category: "Tips",
      title: "Best Practices for Managing Jupyter Notebook Work",
      description:
        "Good notebook workflow is not only about coding. Organization, saving changes, and tracking progress also matter.",
      content: `# Best Practices for Managing Jupyter Notebook Work

## Introduction
A good notebook workflow helps users stay organized and reduces mistakes during development.

## Recommended Practices
### Keep Notebooks Organized
Use clear names and separate notebooks by task or topic.

### Save Work Regularly
Even with automation, users should maintain good habits around saving progress and reviewing changes.

### Track Changes in GitHub
Version control helps users understand what changed over time and protects work from being lost.

### Use Clear Project Structure
Keep notebooks, data files, and outputs in organized folders.

## Why This Matters
Machine learning work often changes quickly. Without structure, projects become harder to maintain and harder to share with others.

## How Our Toolkit Helps
The toolkit is designed to support better workflow by reducing setup burden and supporting automatic GitHub-related actions.

## Conclusion
Better organization improves productivity. The toolkit is not only about setup; it also supports a more stable and manageable notebook workflow.`,
      author: "Admin Team",
      date: "April 23, 2026",
      readTime: "5 min read",
    },
    {
      id: 6,
      category: "Community",
      title: "How Students and Developers Can Benefit from This Toolkit",
      description:
        "This toolkit is designed for learners and developers who want a faster, easier, and less frustrating notebook setup experience.",
      content: `# How Students and Developers Can Benefit from This Toolkit

## Target Users
Our project is mainly designed for:
- Students learning AI and machine learning
- Developers using TensorFlow
- People who work with Jupyter Notebook regularly

## Common Challenges
These users often face:
- long setup time
- installation issues
- dependency conflicts
- repeated manual tasks

## How the Toolkit Helps
### Faster Start
Users can move from setup to real work more quickly.

### Reduced Frustration
A prepared environment means fewer installation problems.

### Better Workflow
Notebook launch and GitHub-related automation make the working process smoother.

### More Time for Learning and Building
Instead of fixing setup problems, users can focus on notebooks, data, models, and experiments.

## Why This Is Valuable
When tools are easier to start and use, more people can learn effectively and work productively.

## Conclusion
This toolkit aims to make technical workflows simpler, especially for people who want to focus on machine learning and notebook-based development without unnecessary setup difficulty.`,
      author: "Admin Team",
      date: "April 23, 2026",
      readTime: "4 min read",
    },
  ];

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  const topTwoPosts = regularPosts.slice(0, 2);
  const remainingPosts = regularPosts.slice(2);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedPost(null), 300);
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return <h1 key={index} className="modal-content-h1">{line.slice(2)}</h1>;
      }
      if (line.startsWith("## ")) {
        return <h2 key={index} className="modal-content-h2">{line.slice(3)}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={index} className="modal-content-h3">{line.slice(4)}</h3>;
      }

      if (line.startsWith("```")) {
        return <div key={index} className="modal-code-block-start"></div>;
      }

      if (line.startsWith("- ")) {
        return <li key={index} className="modal-list-item">{line.slice(2)}</li>;
      }
      if (line.match(/^\d+\./)) {
        return (
          <li key={index} className="modal-list-item">
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
      }

      if (line.includes("|")) {
        return <div key={index} className="modal-table-row">{line}</div>;
      }

      if (line.trim() === "") {
        return <br key={index} />;
      }

      return <p key={index} className="modal-paragraph">{line}</p>;
    });
  };

  return (
    <>
      <section className="blogs-page">
        <div className="blogs-hero">
          <div className="blogs-hero-content">
            <span className="blogs-eyebrow">Insights and Guides</span>
            <h1>Explore ideas, workflow tips, and project updates</h1>
            <p>
              Read practical articles about Jupyter Notebook setup, Docker
              environments, workflow automation, and the goals behind this project.
            </p>
          </div>
        </div>

        {featuredPost && (
          <section className="featured-section">
            <div className="featured-blog">
              <div className="featured-blog-left">
                <span className="featured-label">{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.description}</p>

                <div className="featured-meta">
                  <span>{featuredPost.author}</span>
                  <span className="meta-divider">•</span>
                  <span>{featuredPost.date}</span>
                  <span className="meta-divider">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <button
                  className="featured-btn"
                  onClick={() => openModal(featuredPost)}
                >
                  Read Featured Article →
                </button>
              </div>

              <div className="featured-blog-right">
                <div className="featured-visual-glow"></div>
                <div className="featured-visual-card">
                  <div className="featured-mini-badge">Featured Article</div>
                  <h3>Simpler setup, better workflow</h3>
                  <p>
                    Learn why notebook setup becomes difficult and how this project
                    aims to reduce complexity for users.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="blogs-section">
          <div className="blogs-section-header">
            <div className="blogs-section-header-left">
              <h2>Latest Articles</h2>
              <p>Practical reading for users who want a simpler notebook workflow</p>
            </div>
            <a href="#" className="view-all-link">View all articles →</a>
          </div>

          <div className="articles-grid">
            <div className="articles-row-two">
              {topTwoPosts.map((post, index) => (
                <article key={post.id} className="article-card-horizontal">
                  <div className={`card-thumb-large thumb-gradient-${index + 1}`}>
                    <div className="thumb-overlay-shape"></div>
                  </div>
                  <div className="card-content">
                    <span className="card-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p className="card-description">{post.description}</p>

                    <div className="card-meta">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <button
                      className="card-btn"
                      onClick={() => openModal(post)}
                    >
                      Read Article <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="articles-grid-three">
              {remainingPosts.map((post, index) => (
                <article key={post.id} className="article-card-compact">
                  <div className={`card-thumb-compact thumb-gradient-${index + 3}`}>
                    <div className="thumb-overlay-shape"></div>
                  </div>
                  <div className="card-content">
                    <span className="card-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p className="card-description">{post.description}</p>

                    <div className="card-meta">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <button
                      className="card-btn"
                      onClick={() => openModal(post)}
                    >
                      Read More <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>

      {isModalOpen && selectedPost && (
        <div className={`modal-overlay ${isModalOpen ? "modal-open" : ""}`} onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-content">
                <span className="modal-category">{selectedPost.category}</span>
                <h1 className="modal-title">{selectedPost.title}</h1>
                <div className="modal-meta">
                  <span className="modal-author">{selectedPost.author}</span>
                  <span className="meta-divider">•</span>
                  <span className="modal-date">{selectedPost.date}</span>
                  <span className="meta-divider">•</span>
                  <span className="modal-read-time">{selectedPost.readTime}</span>
                </div>
              </div>
              <button className="modal-close-btn" onClick={closeModal}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-content">
                {formatContent(selectedPost.content || selectedPost.description)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blogs;