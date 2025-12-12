import React, { useState } from 'react';
import { MOCK_BLOG_POSTS } from '../constants';
import { generateBlogPost } from '../services/geminiService';
import { Sparkles, Loader } from 'lucide-react';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState(MOCK_BLOG_POSTS);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    setGenerating(true);
    const topics = ["Conseils pour l'Omra 2025", "Que manger en Turquie ?", "Budget voyage Dubaï"];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    const content = await generateBlogPost(randomTopic);
    
    if (content) {
        // Simple parsing since Gemini returns plain text
        const lines = content.split('\n');
        const title = lines[0]?.replace('**', '').replace('**', '') || "Nouvel Article";
        const excerpt = lines.slice(1).join(' ').substring(0, 150) + "...";

        const newPost = {
            id: Date.now().toString(),
            title: title,
            excerpt: excerpt,
            date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
            category: "IA Généré",
            image: `https://picsum.photos/800/400?random=${Date.now()}`
        };
        setPosts([newPost, ...posts]);
    }
    setGenerating(false);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
                <h1 className="font-heading text-4xl font-bold text-tropicam-navy mb-2">Le Blog Voyage</h1>
                <p className="text-gray-500">Conseils, astuces et inspiration pour vos prochaines aventures.</p>
            </div>
            
            {/* AI Generator Button */}
            <button 
                onClick={handleGenerate}
                disabled={generating}
                className="mt-4 md:mt-0 bg-gradient-to-r from-tropicam-navy to-purple-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            >
                {generating ? <Loader className="animate-spin" size={20} /> : <Sparkles size={20} />}
                {generating ? "Rédaction en cours..." : "Générer un article IA"}
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-tropicam-navy text-xs font-bold px-3 py-1 rounded-md">
                            {post.category}
                        </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-gray-400 mb-2">{post.date}</div>
                        <h2 className="font-heading text-xl font-bold text-tropicam-navy mb-3 leading-tight hover:text-tropicam-orange cursor-pointer">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                            {post.excerpt}
                        </p>
                        <button className="text-tropicam-orange font-bold text-sm hover:underline self-start mt-auto">
                            Lire la suite →
                        </button>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;