import { PageRoot } from "@/components/PageRoot";
import { PageHeader } from "@/components/PageHeader";
import { PageMain } from "@/components/PageMain";
import { Image } from "@/components/Image";
import { Drive } from "@/components/Drive";

export default function Home() {
  return (
    <PageRoot>
      <PageHeader />
      <Drive />
      <PageMain>
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?llama"
          alt="random image"
        />
        <Image
          span={2}
          src="https://source.unsplash.com/1200x800/?whale"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?ape"
          alt="random image"
        />
        <Image
          span={4}
          src="https://source.unsplash.com/1200x800/?penguin"
          alt="random image"
        />
        <Image
          span={2}
          src="https://source.unsplash.com/1200x800/?bird"
          alt="random image"
        />
        <Image
          span={2}
          src="https://source.unsplash.com/1200x800/?tiger"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?fish"
          alt="random image"
        />
        <Image
          span={3}
          src="https://source.unsplash.com/1200x800/?panda"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?seal"
          alt="random image"
        />

        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?ladybug"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?spider"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?starfish"
          alt="random image"
        />
        <Image
          span={4}
          src="https://source.unsplash.com/1200x800/?jellyfish"
          alt="random image"
        />
      </PageMain>
    </PageRoot>
  );
}
