import { PageRoot } from "@/components/PageRoot";
import { PageHeader } from "@/components/PageHeader";
import { PageMain } from "@/components/PageMain";
import { Image } from "@/components/Image";

export default function Home() {
  return (
    <PageRoot>
      <PageHeader />
      <PageMain>
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?cat"
          alt="random image"
        />
        <Image
          span={2}
          src="https://source.unsplash.com/1200x800/?pig"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?mouse"
          alt="random image"
        />
        <Image
          span={4}
          src="https://source.unsplash.com/1200x800/?dog"
          alt="random image"
        />
        <Image
          span={2}
          src="https://source.unsplash.com/1200x800/?bird"
          alt="random image"
        />
        <Image
          span={2}
          src="https://source.unsplash.com/1200x800/?horse"
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
          src="https://source.unsplash.com/1200x800/?sea"
          alt="random image"
        />

        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?moon"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?sun"
          alt="random image"
        />
        <Image
          span={1}
          src="https://source.unsplash.com/1200x800/?star"
          alt="random image"
        />
        <Image
          span={4}
          src="https://source.unsplash.com/1200x800/?cloud"
          alt="random image"
        />
      </PageMain>
    </PageRoot>
  );
}
