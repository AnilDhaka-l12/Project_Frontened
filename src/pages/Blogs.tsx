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
      title: "How to Set Up Jupyter Notebook Toolkit for the First Time",
      description:
        "Learn how to install, configure, and start using Jupyter Notebook Toolkit with a modern beginner-friendly setup process designed for speed, simplicity, and productivity.",
      content: `# Getting Started with Jupyter Notebook Toolkit

## Introduction
Setting up Jupyter Notebook Toolkit is easier than ever. This comprehensive guide will walk you through every step of the installation process, ensuring you have a smooth setup experience.

## Prerequisites
Before we begin, make sure you have:
- Python 3.8 or higher installed
- pip (Python package manager)
- At least 4GB of free RAM
- A modern web browser

## Step 1: Installation
First, open your terminal and run:
\`\`\`bash
pip install jupyter-notebook-toolkit
\`\`\`

This command installs the core toolkit along with essential dependencies.

## Step 2: Initial Configuration
After installation, run the setup wizard:
\`\`\`bash
jupyter-toolkit setup
\`\`\`

The wizard will guide you through:
- Setting your workspace directory
- Configuring default kernels
- Choosing your preferred theme

## Step 3: Launch the Interface
Start the toolkit with:
\`\`\`bash
jupyter-toolkit start
\`\`\`

Your default browser will open automatically to http://localhost:8888

## Step 4: Create Your First Notebook
Click "New Notebook" in the dashboard, select your kernel, and start coding! The interface is intuitive and responsive.

## Pro Tips
- Use keyboard shortcuts for faster navigation
- Enable autosave in settings
- Install community extensions for additional features

## Troubleshooting
If you encounter any issues, try:
1. Clearing your browser cache
2. Running \`jupyter-toolkit reset\`
3. Checking the logs at \`~/.jupyter-toolkit/logs\`

## Next Steps
Now that you're set up, explore our other guides on:
- Advanced notebook features
- Collaborative editing
- Deployment options`,
      author: "Admin Team",
      date: "April 16, 2026",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      category: "Productivity",
      title: "Top Features That Make Jupyter Notebook Toolkit Easier to Use",
      description:
        "Explore the most useful features that help developers, students, and researchers work more efficiently every day.",
      content: `# Productivity Features You'll Love

## Smart Code Completion
The toolkit features intelligent autocomplete that learns from your coding patterns. It suggests functions, variables, and imports based on context.

## Split-Screen View
Work on multiple notebooks simultaneously with the split-screen feature. Perfect for comparing code or referencing documentation while coding.

## Integrated Terminal
Access a full terminal within the interface. Run shell commands, manage environments, and execute scripts without leaving the toolkit.

## Markdown Preview
Write documentation in Markdown and see a live preview as you type. Export to HTML, PDF, or LaTeX with one click.

## Variable Explorer
Track all your variables in real-time. See their types, values, and memory usage at a glance.

## Keyboard Shortcuts
Master these essential shortcuts:
- \`Cmd/Ctrl + Enter\`: Run current cell
- \`Shift + Enter\`: Run cell and select next
- \`Alt + Enter\`: Run cell and insert below
- \`Cmd/Ctrl + /\`: Comment/uncomment

## Version Control Integration
Built-in Git support lets you track changes, create branches, and collaborate with team members seamlessly.

## Custom Themes
Choose from light, dark, and high-contrast themes. Create custom themes with CSS variables.

## Performance Profiling
Identify bottlenecks with the built-in profiler. See exactly which functions are consuming the most time and memory.`,
      author: "Admin Team",
      date: "April 16, 2026",
      readTime: "4 min read",
    },
    {
      id: 3,
      category: "Guides",
      title: "Windows vs Linux: Which Download Option Should You Choose?",
      description:
        "A quick comparison to help you decide whether installer images or virtual machines are the better option for your workflow.",
      content: `# Windows vs Linux: Making the Right Choice

## Windows Installation

### Advantages
- Native performance without virtualization overhead
- Seamless integration with Windows Explorer
- Direct access to GPU for machine learning tasks
- Easier for users familiar with Windows environment

### Installation Options
1. **Installer (.exe)** - Recommended for most users
   - Automatic PATH configuration
   - Desktop shortcuts included
   - Easy uninstallation

2. **Portable Version**
   - Run from USB drive
   - No admin rights required
   - Self-contained environment

## Linux Installation

### Advantages
- Better package management with apt/yum
- Superior terminal integration
- Lower memory footprint
- Better for server deployments

### Installation Methods
1. **Package Manager**
   \`\`\`bash
   sudo apt-get install jupyter-toolkit
   \`\`\`

2. **Snap Package**
   \`\`\`bash
   sudo snap install jupyter-toolkit
   \`\`\`

3. **Docker Container**
   \`\`\`bash
   docker pull jupyter/toolkit:latest
   \`\`\`

## Virtual Machine Option
Consider a VM if you:
- Need isolated environments
- Test different OS configurations
- Want snapshot/rollback capabilities

### Recommended VM Software
- VirtualBox (Free)
- VMware Workstation (Paid)
- Hyper-V (Windows Pro)

## Performance Comparison

| Metric | Windows Native | Linux Native | VM |
|--------|--------------|--------------|-----|
| Startup Time | 2-3s | 1-2s | 8-12s |
| RAM Usage | 400MB | 250MB | 1.2GB |
| GPU Access | Full | Full | Limited |

## Recommendation
- **Windows users**: Use the native installer for best performance
- **Linux users**: Install via package manager for system integration
- **Cross-platform teams**: Consider Docker for consistency
- **Testing/Development**: Use VMs for isolated environments`,
      author: "Admin Team",
      date: "April 16, 2026",
      readTime: "6 min read",
    },
    {
      id: 4,
      category: "Updates",
      title: "What's New in the Latest Toolkit Versions",
      description:
        "Stay up to date with recent improvements, bug fixes, and planned enhancements for the toolkit platform.",
      content: `# Latest Updates and Improvements

## Version 2.5.0 (April 2026)

### 🚀 New Features
- **AI-Powered Code Suggestions**: Get intelligent completions powered by machine learning
- **Real-time Collaboration**: Edit notebooks simultaneously with team members
- **Enhanced Debugger**: Set conditional breakpoints and watch expressions
- **Notebook Templates**: Start projects faster with pre-built templates

### ⚡ Performance Improvements
- 40% faster notebook loading
- 60% reduction in memory usage for large datasets
- Optimized rendering for notebooks with 1000+ cells

### 🐛 Bug Fixes
- Fixed autosave conflicts in collaborative sessions
- Resolved kernel connection issues on macOS
- Fixed Markdown rendering for complex tables
- Addressed memory leak in variable explorer

## Version 2.4.2 (March 2026)

### Improvements
- Better error messages for import failures
- Enhanced support for Python 3.12
- Updated documentation with video tutorials

### Security Updates
- Patched XSS vulnerability in Markdown preview
- Updated authentication mechanism for remote access
- Improved token generation for sharing notebooks

## Coming Soon in 2.6.0
- Native support for R and Julia kernels
- Integrated data visualization dashboard
- Mobile-responsive interface
- Offline mode with sync capabilities

## Upgrade Instructions
\`\`\`bash
pip install --upgrade jupyter-notebook-toolkit
\`\`\`

For Docker users:
\`\`\`bash
docker pull jupyter/toolkit:2.5.0
\`\`\``,
      author: "Admin Team",
      date: "April 16, 2026",
      readTime: "3 min read",
    },
    {
      id: 5,
      category: "Tips",
      title: "Best Practices for Organizing Your Notebook Workflow",
      description:
        "Use these practical tips to keep your notebooks clean, maintainable, and easier to share with others.",
      content: `# Organizing Your Notebook Workflow

## Folder Structure
Maintain a consistent folder hierarchy:
\`\`\`
project/
├── notebooks/
│   ├── 01_data_exploration/
│   ├── 02_feature_engineering/
│   └── 03_modeling/
├── data/
│   ├── raw/
│   └── processed/
├── src/
│   └── utils.py
└── outputs/
    ├── figures/
    └── models/
\`\`\`

## Naming Conventions
Use descriptive prefixes:
- \`eda_\` - Exploratory analysis
- \`prep_\` - Data preparation
- \`model_\` - Model training
- \`eval_\` - Evaluation
- \`viz_\` - Visualization

Example: \`2026-04-16_eda_customer_churn.ipynb\`

## Notebook Structure Template
1. **Title and Description**
2. **Imports** (alphabetically organized)
3. **Configuration** (paths, constants)
4. **Helper Functions**
5. **Main Analysis** (with clear section headers)
6. **Results Summary**
7. **Next Steps**

## Version Control Tips
- Clear output before committing
- Use \`.gitignore\` for data files
- Commit notebooks as both .ipynb and .py
- Write meaningful commit messages

## Code Quality
- Use type hints for function parameters
- Add docstrings to functions
- Keep cells focused (one operation per cell)
- Remove dead code and unused imports

## Performance Optimization
- Cache expensive computations
- Use vectorized operations over loops
- Monitor memory with \`%memit\`
- Profile code with \`%prun\`

## Sharing Best Practices
- Clear all outputs before sharing
- Use nbviewer for public notebooks
- Include requirements.txt or environment.yml
- Add badges for build status and dependencies

## Automation
Create a \`setup.py\` file:
\`\`\`python
from setuptools import setup, find_packages

setup(
    name="my_project",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "jupyter-notebook-toolkit>=2.5.0",
        "pandas>=2.0.0",
        "numpy>=1.24.0"
    ]
)
\`\`\``,
      author: "Admin Team",
      date: "April 16, 2026",
      readTime: "5 min read",
    },
    {
      id: 6,
      category: "Community",
      title: "How Developers Can Use the Toolkit for Faster Experimentation",
      description:
        "See how developers can test ideas, build experiments, and improve productivity using the toolkit environment.",
      content: `# Faster Experimentation with Jupyter Toolkit

## Rapid Prototyping
The interactive environment is perfect for:
- Testing API integrations
- Validating algorithms
- Exploring new libraries
- Debugging complex logic

## Experiment Tracking
Use the built-in experiment tracker:
\`\`\`python
from jupyter_toolkit import experiment

with experiment.track("sentiment_analysis_v1"):
    # Your experimental code
    model = train_model(data)
    accuracy = evaluate(model)
    experiment.log_metric("accuracy", accuracy)
\`\`\`

## A/B Testing Framework
Compare different approaches side-by-side:
\`\`\`python
results = toolkit.compare(
    methods=["method_a", "method_b"],
    dataset=test_data,
    metrics=["accuracy", "f1", "runtime"]
)
results.plot_comparison()
\`\`\`

## Integration with Popular Tools
- **MLflow**: Track experiments across sessions
- **DVC**: Version control for datasets
- **Weights & Biases**: Advanced visualization
- **TensorBoard**: Monitor training in real-time

## Debugging Techniques
Use the enhanced debugger:
\`\`\`python
# Set conditional breakpoint
debug.break_if(lambda x: x is None, variable)

# Watch expressions
debug.watch("len(dataframe)", "model.score(X_test, y_test)")

# Post-mortem debugging
debug.on_error()
\`\`\`

## Performance Testing
Quickly benchmark different implementations:
\`\`\`python
results = benchmark.compare(
    implementations=[implementations.numpy, implementations.pandas],
    input_sizes=[1000, 10000, 100000],
    iterations=10
)
results.show_summary()
\`\`\`

## Collaboration Features
- Share experiment results via URL
- Comment on specific cells
- @mention team members
- Create experiment templates

## Export Options
Convert experiments to production code:
\`\`\`bash
jupyter-toolkit export experiment.ipynb --format python --output production.py
\`\`\``,
      author: "Admin Team",
      date: "April 16, 2026",
      readTime: "4 min read",
    },
  ];

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);
  
  // First two posts get the horizontal card layout
  const topTwoPosts = regularPosts.slice(0, 2);
  // Remaining posts get the compact grid layout
  const remainingPosts = regularPosts.slice(2);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    // Small delay before clearing selected post to maintain smooth animation
    setTimeout(() => setSelectedPost(null), 300);
  };

  // Helper function to format content with basic markdown-like styling
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="modal-content-h1">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="modal-content-h2">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="modal-content-h3">{line.slice(4)}</h3>;
      }
      
      // Code blocks
      if (line.startsWith('```')) {
        return <div key={index} className="modal-code-block-start"></div>;
      }
      
      // Lists
      if (line.startsWith('- ')) {
        return <li key={index} className="modal-list-item">{line.slice(2)}</li>;
      }
      if (line.match(/^\d+\./)) {
        return <li key={index} className="modal-list-item">{line.replace(/^\d+\.\s/, '')}</li>;
      }
      
      // Tables (simplified)
      if (line.includes('|')) {
        return <div key={index} className="modal-table-row">{line}</div>;
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      // Regular paragraphs
      return <p key={index} className="modal-paragraph">{line}</p>;
    });
  };

  return (
    <>
      <section className="blogs-page">
        {/* Hero Section */}
        <div className="blogs-hero">
          <div className="blogs-hero-content">
            <span className="blogs-eyebrow">Insights & Stories</span>
            <h1>Explore ideas, guides, and product updates that move your workflow forward</h1>
            <p>
              Discover practical tutorials, release updates, workflow ideas, and
              expert guidance to help you get more value from Jupyter Notebook Toolkit.
            </p>
          </div>
        </div>

        {/* Featured Section */}
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
                  <div className="featured-mini-badge">Editor's Pick</div>
                  <h3>Modern setup, smoother workflow</h3>
                  <p>
                    A polished starting point for users who want to install and start
                    using the toolkit with confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles Section */}
        <section className="blogs-section">
          <div className="blogs-section-header">
            <div className="blogs-section-header-left">
              <h2>Latest Articles</h2>
              <p>Fresh guides, updates, and practical ideas for everyday users</p>
            </div>
            <a href="#" className="view-all-link">View all articles →</a>
          </div>

          <div className="articles-grid">
            {/* Top 2 Articles - Horizontal Cards */}
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

            {/* Remaining Articles - 3 Column Compact Grid */}
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

      {/* Modal Overlay - No Footer Version */}
      {isModalOpen && selectedPost && (
        <div className={`modal-overlay ${isModalOpen ? 'modal-open' : ''}`} onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
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