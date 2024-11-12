import { Avatar } from "@radix-ui/react-avatar";
import { Clock, ExternalLink, Github, MessageSquare } from "lucide-react";
import { AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

interface NotionSelect {
  id: string;
  name: string;
  color: string;
}

interface NotionMultiSelect {
  id: string;
  name: string;
  color: string;
}

interface NotionPerson {
  id: string;
  name: string;
  avatar_url?: string;
}

interface NotionFile {
  url: string;
  name: string;
}

interface BlogPost {
  title: { rich_text: Array<{ plain_text: string }> };
  slug: { rich_text: Array<{ plain_text: string }> };
  summary: { rich_text: Array<{ plain_text: string }> };
  category: { multi_select: NotionMultiSelect[] };
  tags: { multi_select: NotionMultiSelect[] };
  author: { people: NotionPerson[] };
  publishedAt: { created_time: string };
  status: { select: NotionSelect };
  featured: { checkbox: boolean };
  featuredImage: { files: NotionFile[] };
  commentsEnabled: { checkbox: boolean };
  githubUrl: { url: string | null };
  demoUrl: { url: string | null };
}

interface PostStatusProps {
  status: BlogPost["status"];
}

const PostStatus: React.FC<PostStatusProps> = ({ status }) => {
  const statusStyles: Record<string, string> = {
    draft: "bg-yellow-200 text-yellow-800",
    review: "bg-blue-200 text-blue-800",
    published: "bg-green-200 text-green-800",
    archived: "bg-gray-200 text-gray-800",
  };

  const statusName = status.select.name.toLowerCase();
  const statusStyle = statusStyles[statusName] || statusStyles.draft;

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${statusStyle}`}>
      {status.select.name}
    </span>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
}
const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const getPlainText = (
    richText: Array<{ plain_text: string }> | undefined
  ) => {
    return richText?.[0]?.plain_text || "";
  };

  // Add featured styles to the card
  const cardStyles = `group transition-all duration-300 ${
    post.featured?.checkbox
      ? "border-primary/50 bg-primary/5 hover:shadow-primary/20"
      : "hover:shadow-lg"
  }`;

  return (
    <Card className={cardStyles}>
      <CardHeader className="relative p-0">
        {post.featuredImage?.files?.[0]?.url && (
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={post.featuredImage.files[0].url}
              alt={getPlainText(post.title.rich_text)}
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            />
            {post.featured?.checkbox && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Destacado
              </div>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {post.author?.people?.[0] && (
              <Avatar className="w-8 h-8">
                <AvatarImage src={post.author.people[0].avatar_url} />
                <AvatarFallback>
                  {post.author.people[0].name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            )}
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {post.author?.people?.[0]?.name}
              </span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <time dateTime={post.publishedAt.created_time}>
                  {new Date(post.publishedAt.created_time).toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
          <PostStatus status={post.status} />
        </div>

        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {getPlainText(post.title.rich_text)}
        </h2>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {getPlainText(post.summary.rich_text)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.category?.multi_select?.slice(0, 3).map((cat) => (
            <Badge key={cat.id} variant="secondary" className="text-xs">
              {cat.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags?.multi_select?.slice(0, 4).map((tag) => (
            <span key={tag.id} className="text-xs text-muted-foreground">
              #{tag.name}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 border-t flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {post.commentsEnabled?.checkbox && (
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span>Comentarios</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {post.githubUrl?.url && (
            <a
              href={post.githubUrl.url}
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {post.demoUrl?.url && (
            <a
              href={post.demoUrl.url}
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
