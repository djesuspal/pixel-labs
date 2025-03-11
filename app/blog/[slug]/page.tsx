'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Button } from '@/components/ui/button'

// Sample blog posts data - same as in the blog index page
const posts = [
  {
    id: '1',
    title: 'Understanding Token Extensions on Solana',
    excerpt: 'A deep dive into how token extensions are revolutionizing the Solana ecosystem',
    date: 'March 5, 2024',
    author: 'Denis Jesus Palma Abanto',
    slug: 'understanding-token-extensions',
    content: `
      <p>Token extensions on Solana represent a significant advancement in the platform's capabilities, offering developers new ways to customize and enhance token functionality.</p>
      
      <h2>What are Token Extensions?</h2>
      <p>Token extensions are modular components that can be added to Solana tokens to extend their native functionality. This innovation allows developers to incorporate features like transfer fees, non-transferability periods, and metadata directly at the token level.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Enhanced Programmability:</strong> Developers can create tokens with specific behaviors without having to implement complex smart contracts.</li>
        <li><strong>Improved Security:</strong> By building functionality directly into the token standard, many common vulnerabilities associated with custom smart contract implementations are avoided.</li>
        <li><strong>Better User Experience:</strong> End users benefit from consistent behavior across applications that use the same token extensions.</li>
      </ul>
      
      <h2>Popular Extension Types</h2>
      <p>Several extension types have already gained popularity among Solana developers:</p>
      
      <h3>Transfer Hook</h3>
      <p>This extension allows developers to execute custom logic whenever tokens are transferred, enabling advanced features like royalties, anti-bot measures, or transaction fees.</p>
      
      <h3>Non-Transferable</h3>
      <p>Tokens can be made non-transferable for specific periods or under certain conditions, which is particularly useful for vesting tokens, loyalty rewards, or soulbound tokens.</p>
      
      <h3>Metadata</h3>
      <p>The metadata extension allows rich information to be attached directly to tokens, improving their discoverability and usability across different applications.</p>
      
      <h2>Implementation Considerations</h2>
      <p>When implementing token extensions, developers should consider:</p>
      <ul>
        <li>The gas cost implications of complex extensions</li>
        <li>Potential interactions between multiple extensions on the same token</li>
        <li>User experience impacts, especially for wallets that may not yet support all extension types</li>
      </ul>
      
      <h2>Future Directions</h2>
      <p>The token extension ecosystem on Solana continues to evolve rapidly. We anticipate seeing new extension types emerge that address specific industry needs, particularly in DeFi, gaming, and identity management.</p>
      
      <p>At Pixel Labs, we're actively developing with token extensions to create more powerful and flexible protocols. We believe this technology represents a significant step forward for the Solana ecosystem and will enable entirely new categories of applications.</p>
    `
  },
  {
    id: '2',
    title: 'Building Resilient Infrastructure for Blockchain Applications',
    excerpt: 'Lessons learned from scaling Solana infrastructure and how to apply them to your projects',
    date: 'February 22, 2024',
    author: 'Denis Jesus Palma Abanto',
    slug: 'resilient-blockchain-infrastructure',
    content: `
      <p>Having led Solana's infrastructure team through periods of explosive growth, I've learned valuable lessons about building resilient systems for blockchain applications. This post shares key insights that can help your Web3 projects achieve greater stability and performance.</p>
      
      <h2>The Unique Challenges of Blockchain Infrastructure</h2>
      <p>Blockchain applications face distinct challenges compared to traditional web services:</p>
      <ul>
        <li><strong>Immutability:</strong> Once deployed, blockchain code can't be easily modified, raising the stakes for initial deployments.</li>
        <li><strong>Decentralization:</strong> Infrastructure must be designed to work with decentralized networks, often with unpredictable behavior.</li>
        <li><strong>Consensus Requirements:</strong> The need for nodes to reach consensus adds complexity to scaling and performance optimization.</li>
      </ul>
      
      <h2>Key Principles for Resilient Blockchain Infrastructure</h2>
      
      <h3>1. Design for Failure</h3>
      <p>Assume components will fail and design your systems accordingly. This means implementing:</p>
      <ul>
        <li>Automatic failover mechanisms</li>
        <li>Graceful degradation patterns</li>
        <li>Comprehensive monitoring and alerting</li>
      </ul>
      
      <h3>2. Scale Horizontally</h3>
      <p>Vertical scaling quickly hits limits in blockchain applications. Instead, focus on:</p>
      <ul>
        <li>Stateless services that can be easily replicated</li>
        <li>Load balancing across multiple nodes</li>
        <li>Efficient data partitioning strategies</li>
      </ul>
      
      <h3>3. Optimize for Data Consistency</h3>
      <p>In blockchain environments, data consistency is paramount:</p>
      <ul>
        <li>Implement robust validation at multiple levels</li>
        <li>Design careful state management systems</li>
        <li>Consider eventual consistency trade-offs carefully</li>
      </ul>
      
      <h2>Practical Implementation Strategies</h2>
      
      <h3>RPC Node Architecture</h3>
      <p>When designing RPC infrastructure for blockchain applications:</p>
      <ul>
        <li>Use a tiered approach with dedicated nodes for different query types</li>
        <li>Implement caching strategies for common queries</li>
        <li>Consider rate limiting to prevent resource exhaustion</li>
      </ul>
      
      <h3>Monitoring and Observability</h3>
      <p>Effective monitoring is crucial for blockchain infrastructure:</p>
      <ul>
        <li>Track both system-level metrics (CPU, memory, network) and blockchain-specific metrics (block height, transaction throughput)</li>
        <li>Implement detailed logging with structured data</li>
        <li>Set up alerts for both immediate issues and trend-based warnings</li>
      </ul>
      
      <h3>Deployment and Upgrading</h3>
      <p>Given the immutability of blockchain code, deployment practices are critical:</p>
      <ul>
        <li>Implement extensive pre-deployment testing, including mainnet simulations</li>
        <li>Use canary deployments when possible</li>
        <li>Develop clear rollback procedures for when issues are detected</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building resilient infrastructure for blockchain applications requires a specific mindset and unique approaches. By applying these principles and strategies, teams can create more stable, performant, and reliable Web3 applications that can grow with user demand.</p>
      
      <p>At Pixel Labs, we apply these lessons daily in our work, creating robust protocols that can withstand the demanding conditions of production blockchain environments.</p>
    `
  },
  {
    id: '3',
    title: 'The Future of Web3 Development',
    excerpt: 'How emerging patterns and tools are shaping the next generation of decentralized applications',
    date: 'January 18, 2024',
    author: 'Denis Jesus Palma Abanto',
    slug: 'future-of-web3-development',
    content: `
      <p>The Web3 development landscape is evolving rapidly. As we move forward, new patterns, tools, and approaches are emerging that will define the next generation of decentralized applications. This post explores these trends and what they mean for developers and users.</p>
      
      <h2>Modular Architecture: The Next Evolution</h2>
      <p>Monolithic blockchain designs are giving way to modular approaches:</p>
      <ul>
        <li><strong>Execution, Settlement, Data Availability, and Consensus:</strong> These layers are being separated to allow for greater specialization and optimization.</li>
        <li><strong>Composable Solutions:</strong> Developers can now mix and match components to create purpose-built systems.</li>
        <li><strong>Cross-Chain Interoperability:</strong> The ability for different blockchain systems to communicate and share state is becoming increasingly important.</li>
      </ul>
      
      <h2>Developer Experience Improvements</h2>
      <p>Web3 development has historically been challenging, but this is changing rapidly:</p>
      
      <h3>Better Tooling</h3>
      <p>New development tools are making Web3 more accessible:</p>
      <ul>
        <li>Integrated development environments specifically designed for blockchain development</li>
        <li>Improved testing frameworks that better simulate on-chain conditions</li>
        <li>Debugging tools that provide greater visibility into transaction execution</li>
      </ul>
      
      <h3>Simplified Programming Models</h3>
      <p>Programming models are evolving to be more intuitive:</p>
      <ul>
        <li>Domain-specific languages that abstract away blockchain complexities</li>
        <li>Framework-level handling of common patterns like account management</li>
        <li>Higher-level abstractions that map better to business logic</li>
      </ul>
      
      <h3>AI-Assisted Development</h3>
      <p>AI tools are beginning to transform how Web3 code is written:</p>
      <ul>
        <li>Code generation for common patterns</li>
        <li>Automated security analysis</li>
        <li>Natural language interfaces for smart contract creation</li>
      </ul>
      
      <h2>User Experience Focus</h2>
      <p>As Web3 matures, user experience is becoming central to development:</p>
      
      <h3>Account Abstraction</h3>
      <p>Advances in account abstraction are making Web3 more accessible:</p>
      <ul>
        <li>Social recovery options for wallet access</li>
        <li>Sponsored transaction fees for smoother onboarding</li>
        <li>Session keys for improved application interactions</li>
      </ul>
      
      <h3>Progressive Decentralization</h3>
      <p>Projects are taking more nuanced approaches to decentralization:</p>
      <ul>
        <li>Starting with centralized components for better UX</li>
        <li>Gradually introducing decentralized elements as the product matures</li>
        <li>Thoughtful consideration of which components truly need decentralization</li>
      </ul>
      
      <h2>Infrastructure Maturation</h2>
      <p>The underlying infrastructure for Web3 is growing more sophisticated:</p>
      
      <h3>Data Indexing and Query Services</h3>
      <p>Better data services are enabling richer applications:</p>
      <ul>
        <li>Specialized indexing solutions for different data types</li>
        <li>Real-time event processing capabilities</li>
        <li>GraphQL interfaces for flexible data queries</li>
      </ul>
      
      <h3>Scalable Storage Solutions</h3>
      <p>New approaches to decentralized storage are emerging:</p>
      <ul>
        <li>Hybrid models combining on-chain and off-chain storage</li>
        <li>Content-addressed systems for efficient data retrieval</li>
        <li>Economic models that align incentives for long-term storage</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of Web3 development looks increasingly accessible, performant, and user-friendly. As these trends continue to develop, we expect to see a new wave of decentralized applications that can compete with traditional web applications on experience while delivering the unique benefits of blockchain technology.</p>
      
      <p>At Pixel Labs, we're excited to be part of this evolution, continuously exploring and implementing these emerging patterns to create more effective and accessible blockchain solutions.</p>
    `
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  
  // Find the post with the matching slug
  const post = posts.find(p => p.slug === slug)
  
  // If no post is found, show a 404 message
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen pt-20">
        <header className="px-4 lg:px-6 h-20 flex items-center border-b fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
          <Link href="/" className="flex items-center gap-2 cursor-pointer h-20 py-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-high-resolution-logo-transparent%20(2)-RKttFAOiwcuzP4wxnobtCDK5sjA6Dl.png"
              alt="Pixel Labs Logo - Denis Jesus Palma Abanto's Web3 Development Company"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="ml-auto flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/#products" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/denis-jesus-palma-abanto" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
        </header>
        <main className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-8">Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist or may have been moved.</p>
            <Link href="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | Pixel Labs Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-20 flex items-center border-b fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
          <Link href="/" className="flex items-center gap-2 cursor-pointer h-20 py-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-high-resolution-logo-transparent%20(2)-RKttFAOiwcuzP4wxnobtCDK5sjA6Dl.png"
              alt="Pixel Labs Logo - Denis Jesus Palma Abanto's Web3 Development Company"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="ml-auto flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/#products" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/denis-jesus-palma-abanto" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
        </header>
        <main className="flex-1 pt-24">
          <article className="container max-w-3xl mx-auto px-4 md:px-6">
            <div className="mb-8">
              <Link href="/blog" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
            
            <header className="mb-12">
              <time dateTime={post.date} className="text-sm text-gray-500 mb-2 block">
                {post.date}
              </time>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center text-sm">
                  DJ
                </div>
                <div>
                  <div className="text-sm font-medium">{post.author}</div>
                  <div className="text-xs text-gray-500">Founder, Pixel Labs</div>
                </div>
              </div>
            </header>
            
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-16 pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">Share this post</h3>
              <div className="flex gap-4">
                <Button variant="outline" className="gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                  Twitter
                </Button>
                <Button variant="outline" className="gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" className="gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </Button>
              </div>
            </div>
          </article>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-16">
          <p className="text-xs text-gray-500">© 2024 Pixel Labs, Inc. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6" aria-label="Footer navigation">
            <Link href="/" className="text-xs hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/#products" className="text-xs hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/denis-jesus-palma-abanto" className="text-xs hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="text-xs hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
        </footer>
      </div>
    </>
  )
}
