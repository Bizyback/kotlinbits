import React from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@theme-original/BlogPostItem";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { frontMatter, title } = metadata;
  const { enableComments } = frontMatter;
  const { colorMode } = useColorMode();

  return (
    <>
      <BlogPostItem {...props} />
      {enableComments && isBlogPostPage && (
        <Giscus
          id="comments"
          repo="MamboBryan/kotlinbits"
          repoId="R_kgDOJE1rbQ"
          category="Bits"
          categoryId="DIC_kwDOJE1rbc4CW6Mz"
          mapping="title"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={colorMode}
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
        />
      )}
    </>
  );
}
