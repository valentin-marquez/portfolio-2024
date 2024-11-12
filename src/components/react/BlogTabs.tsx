import BlogPostCard from "@/components/react/BlogPostCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/react/tabs";

interface RichTextItem {
  plain_text: string;
  // Add other properties as needed
}

interface SelectOption {
  id: string;
  name: string;
  color: string;
}

interface FileItem {
  // Add file properties as needed
  url: string;
  name: string;
}

interface PostProperties {
  title: { type: "rich_text"; id: string; rich_text: RichTextItem[] };
  slug: { type: "rich_text"; id: string; rich_text: RichTextItem[] };
  summary: { type: "rich_text"; id: string; rich_text: RichTextItem[] };
  content: { type: "title"; id: string; title: RichTextItem[] };
  category: { type: "multi_select"; id: string; multi_select: SelectOption[] };
  tags: { type: "multi_select"; id: string; multi_select: SelectOption[] };
  author: { type: "people"; id: string; people: any[] }; // Define people type if needed
  publishedAt: { type: "created_time"; id: string; created_time: string };
  status: { type: "select"; id: string; select: SelectOption };
  featured: { type: "checkbox"; id: string; checkbox: boolean };
  featuredImage: { type: "files"; id: string; files: FileItem[] };
  seoTitle: { type: "rich_text"; id: string; rich_text: RichTextItem[] };
  seoDescription: { type: "rich_text"; id: string; rich_text: RichTextItem[] };
  commentsEnabled: { type: "checkbox"; id: string; checkbox: boolean };
  locale: { type: "select"; id: string; select: SelectOption };
  githubUrl: { type: "url"; id: string; url: string | null };
  demoUrl: { type: "url"; id: string; url: string | null };
}

interface Post {
  id: string;
  data: {
    properties: PostProperties;
  };
  digest: string;
  rendered: any; // Define more specifically if needed
  collection: string;
}

interface GroupedPosts {
  published?: Post[];
  draft?: Post[];
}

interface BlogTabsProps {
  posts: Post[];
  groupedPosts: GroupedPosts;
}

const BlogTabs = ({ posts, groupedPosts }: BlogTabsProps) => {
  // Sort posts to show featured ones first
  const sortPosts = (postsToSort: Post[]) => {
    return [...postsToSort].sort((a, b) => {
      // Sort by featured status first
      const aFeatured = a.data.properties.featured?.checkbox ? 1 : 0;
      const bFeatured = b.data.properties.featured?.checkbox ? 1 : 0;

      if (bFeatured !== aFeatured) return bFeatured - aFeatured;

      // Then sort by date
      return (
        new Date(b.data.properties.publishedAt.created_time).getTime() -
        new Date(a.data.properties.publishedAt.created_time).getTime()
      );
    });
  };

  const sortedPosts = sortPosts(posts);
  const sortedPublished = groupedPosts.published
    ? sortPosts(groupedPosts.published)
    : [];
  const sortedDrafts = groupedPosts.draft ? sortPosts(groupedPosts.draft) : [];

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-8">
        <TabsTrigger value="all">Todas</TabsTrigger>
        <TabsTrigger value="published">Publicadas</TabsTrigger>
        {groupedPosts.draft && (
          <TabsTrigger value="draft">Borradores</TabsTrigger>
        )}
      </TabsList>

      <TabsContent value="all">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <BlogPostCard key={post.id} post={post.data.properties} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="published">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPublished.map((post) => (
            <BlogPostCard key={post.id} post={post.data.properties} />
          ))}
        </div>
      </TabsContent>

      {groupedPosts.draft && (
        <TabsContent value="draft">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedDrafts.map((post) => (
              <BlogPostCard key={post.id} post={post.data.properties} />
            ))}
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
};
export default BlogTabs;
