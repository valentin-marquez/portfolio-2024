// BlogTabs.tsx
import BlogPostCard from "@/components/react/BlogPostCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/react/tabs";

interface RichTextItem {
  plain_text: string;
}

interface SelectOption {
  id: string;
  name: string;
  color: string;
}

interface FileItem {
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
  author: { type: "people"; id: string; people: any[] };
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
  rendered: any;
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
    <Tabs defaultValue="all" className="w-full space-y-6">
      <TabsList className="flex justify-start w-full overflow-x-auto overflow-y-hidden no-scrollbar border-b border-border p-1 bg-transparent">
        <TabsTrigger value="all" className="flex-shrink-0 px-4 py-2 text-sm">
          Todas
        </TabsTrigger>
        <TabsTrigger
          value="published"
          className="flex-shrink-0 px-4 py-2 text-sm"
        >
          Publicadas
        </TabsTrigger>
        {groupedPosts.draft && (
          <TabsTrigger
            value="draft"
            className="flex-shrink-0 px-4 py-2 text-sm"
          >
            Borradores
          </TabsTrigger>
        )}
      </TabsList>

      <TabsContent value="all" className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              post={post.data.properties}
              className="h-full"
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="published" className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPublished.map((post) => (
            <BlogPostCard
              key={post.id}
              post={post.data.properties}
              className="h-full"
            />
          ))}
        </div>
      </TabsContent>

      {groupedPosts.draft && (
        <TabsContent value="draft" className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedDrafts.map((post) => (
              <BlogPostCard
                key={post.id}
                post={post.data.properties}
                className="h-full"
              />
            ))}
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
};

export default BlogTabs;
