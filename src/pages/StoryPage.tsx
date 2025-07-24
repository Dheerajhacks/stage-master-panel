import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const stories = {
  "kala-utsav-2024": {
    id: "kala-utsav-2024",
    title: "Kala Utsav 2024",
    description: "Join us for the biggest cultural festival of the year featuring artists from across India.",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Kala Connect Team",
    category: "Events",
    image: "/lovable-uploads/07a82488-306d-4312-a983-3162f528a949.png",
    content: `
      <p class="text-lg text-muted-foreground mb-6">The annual Kala Utsav festival brings together the most talented artists from across India for a spectacular celebration of culture, art, and creativity.</p>
      
      <h2 class="text-2xl font-bold mb-4">A Celebration of Diversity</h2>
      <p class="mb-6">This year's festival promises to be our biggest yet, featuring over 200 artists across multiple disciplines including traditional dance, contemporary music, visual arts, and theatrical performances. The event spans three days and showcases the rich cultural heritage of our nation.</p>
      
      <h2 class="text-2xl font-bold mb-4">Featured Performances</h2>
      <p class="mb-6">Attendees can expect mesmerizing performances from renowned classical dancers, soulful musical renditions by emerging artists, and thought-provoking art installations by contemporary visual artists. The festival also includes workshops and masterclasses for aspiring artists.</p>
      
      <h2 class="text-2xl font-bold mb-4">Join the Community</h2>
      <p class="mb-6">Kala Utsav is more than just a festival—it's a platform for artists to connect, collaborate, and inspire each other. Whether you're a performer, creator, or art enthusiast, this event offers something special for everyone.</p>
    `
  },
  "emerging-artists-spotlight": {
    id: "emerging-artists-spotlight",
    title: "Emerging Artists Spotlight",
    description: "Discover the next generation of creative talent making waves in the art world.",
    date: "March 10, 2024",
    readTime: "4 min read",
    author: "Sarah Mitchell",
    category: "Artists",
    image: "/api/placeholder/600/400",
    content: `
      <p class="text-lg text-muted-foreground mb-6">The art world is constantly evolving, and today's emerging artists are pushing boundaries like never before.</p>
      
      <h2 class="text-2xl font-bold mb-4">Innovation in Art</h2>
      <p class="mb-6">From digital installations to sustainable art practices, emerging artists are redefining what it means to create in the modern world. Their fresh perspectives and innovative techniques are capturing the attention of galleries, collectors, and art enthusiasts worldwide.</p>
      
      <h2 class="text-2xl font-bold mb-4">Platform for Growth</h2>
      <p class="mb-6">Kala Connect is proud to provide a platform where these talented individuals can showcase their work, connect with potential clients, and build their artistic careers. Our featured artists program highlights exceptional emerging talent every month.</p>
    `
  },
  "digital-art-revolution": {
    id: "digital-art-revolution",
    title: "The Digital Art Revolution",
    description: "How technology is transforming the way we create and experience art in the modern age.",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Tech Arts Team",
    category: "Technology",
    image: "/api/placeholder/600/400",
    content: `
      <p class="text-lg text-muted-foreground mb-6">The intersection of technology and art has opened up unprecedented possibilities for creative expression.</p>
      
      <h2 class="text-2xl font-bold mb-4">New Mediums, New Possibilities</h2>
      <p class="mb-6">Virtual reality experiences, AI-generated art, and interactive digital installations are just the beginning. Artists are leveraging cutting-edge technology to create immersive experiences that were impossible just a few years ago.</p>
      
      <h2 class="text-2xl font-bold mb-4">Accessibility and Reach</h2>
      <p class="mb-6">Digital platforms have democratized art creation and distribution, allowing artists from all backgrounds to reach global audiences. This technological revolution is breaking down traditional barriers and creating new opportunities for artistic collaboration.</p>
    `
  }
};

const StoryPage = () => {
  const { storyId } = useParams();
  const story = storyId ? stories[storyId as keyof typeof stories] : null;

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation onArtistDashboard={() => {}} />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Story Not Found</h1>
          <p className="text-muted-foreground mb-8">The story you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onArtistDashboard={() => {}} />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            {story.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{story.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{story.description}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {story.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {story.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {story.readTime}
            </div>
          </div>
        </div>

        <div className="aspect-video mb-8 rounded-lg overflow-hidden">
          <img 
            src={story.image} 
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default StoryPage;