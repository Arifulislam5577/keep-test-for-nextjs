"use client";
import {
  Card,
  Button,
  Popover,
  Avatar,
  Badge,
  PlayButton,
  Progress,
} from "keep-react";
import Image from "next/image";
import {
  CaretRight,
  ArchiveTray,
  DotsThreeVertical,
  PencilCircle,
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Users,
  CheckCircle,
} from "phosphor-react";

export const CardComponent = () => {
  return (
    <div className="flex flex-wrap gap-5 items-start">
      <Card className="md:p-6 p-5 max-w-lg">
        <Card.Title>Keep React</Card.Title>
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use.
        </Card.Description>
        <Card.Link
          href="/"
          icon={<CaretRight size={16} color="#1B4DFF" />}
          iconPosition="left"
        >
          Learn More
        </Card.Link>
      </Card>
      <Card className="p-6 max-w-xl">
        <Card.Container className="flex items-start md:gap-5 gap-3.5">
          <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 md:p-4 p-2.5">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep React</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              href="/"
              icon={<CaretRight size={16} color="#1B4DFF" />}
              iconPosition="left"
            >
              Learn More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="p-6 max-w-xl">
        <Card.Container className="flex gap-5">
          <Card.Container className="flex items-start gap-5">
            <Card.Container className="flex items-center justify-start rounded-full bg-slate-50 md:p-4 p-2.5">
              <ArchiveTray size={28} color="#3D4A5C" />
            </Card.Container>
            <Card.Container className="flex flex-col gap-2">
              <Card.Title>Keep React</Card.Title>
              <Card.Description>
                Component design systems can help developers to be more
                productive by providing them with a ready-made set of components
                to use.
              </Card.Description>
            </Card.Container>
          </Card.Container>
          <Card.Container className="hidden items-start md:flex">
            <Popover
              className="!w-[20rem]"
              additionalContent={
                <h2 className="text-lg leading-6 tracking-[-0.3px] font-medium text-slate-500">
                  Keep Design System
                </h2>
              }
            >
              <DotsThreeVertical
                size={24}
                color="#5E718D"
                className="flex cursor-pointer items-start"
              />
            </Popover>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="md:p-6 p-5 max-w-[280px]">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep React</Card.Title>
          <Card.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary" className="!hidden md:!block">
            Learn More
          </Button>
          <Button type="outlinePrimary" size="sm" className="md:hidden block">
            Learn More
          </Button>
        </Card.Container>
      </Card>
      <Card className="max-w-xs p-6 md:max-w-lg">
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use. This can
          save time and effort, and it can also help to reduce the risk of
          errors.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar
            size="lg"
            shape="circle"
            img="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <Card.Container className="ml-3">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
              Md Ariful Islam
            </Card.Title>
            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
              Product Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="max-w-[250px] p-6">
        <Card.Container className="flex items-center justify-center">
          <Avatar
            shape="circle"
            img="https://randomuser.me/api/portraits/men/50.jpg"
            statusPosition="bottom-right"
            size="2xl"
          />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
            Khairul Islam Ridoy
          </Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
            UI/UX Designer
          </Card.Title>
        </Card.Container>
        <Card.Container className="circled mx-auto flex max-w-[220px] items-center justify-center divide-x divide-metal-200 rounded-md border border-metal-200 p-1 md:p-2">
          <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
            href="#"
          />
        </Card.Container>
      </Card>
      <Card
        imgSrc="https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format"
        imgSize="md"
        className="max-w-xs"
      >
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="circle"
              img="/images/avatar/avatar-4.png"
            />
          </Card.Container>
          <Card.Container className="mb-3 mt-10 text-center">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
              Khairul Islam
            </Card.Title>
            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Post
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">
                254
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Followers
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">
                1245M
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Following
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">
                58
              </Card.Title>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="relative max-w-xs overflow-hidden rounded-md">
        <Card.Container>
          <Image
            height={204}
            width={373}
            src="https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format"
            alt="blog"
            className="brightness-50"
          />
        </Card.Container>
        <Card.Container className="absolute flex items-start py-3 px-5">
          <Card.Container>
            <Card.Title className="text-md md:text-xl font-medium text-white">
              Keep React
            </Card.Title>
            <Card.Description className="text-xs md:text-sm font-normal text-white">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              className="mt-3 flex items-center gap-1 text-xs md:text-sm font-normal text-white"
              href="/"
              icon={<CaretRight size={16} color="#fff" />}
              iconPosition="left"
            >
              Read More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="max-w-2xl border-none !bg-transparent">
        <Card.Container className="flex items-start border-none">
          <Card.Container>
            <Image
              height={600}
              width={200}
              src="https://images.prismic.io/staticmania/b6fe0b6c-5c0d-46a1-8ac6-68fe59d418c8_blog2.jpg?auto=compress,format"
              alt="blog"
              className="rounded-xl"
            />
          </Card.Container>
          <Card.Container className="md:px-6 px-3">
            <Card.Container className="inline-block">
              <Badge colorType="light" color="info" size="xs">
                Tips & Advice
              </Badge>
            </Card.Container>
            <Card.Title className="text-sm md:text-xl font-medium text-slate-700">
              Keep React
            </Card.Title>
            <Card.Description className="text-xs md:text-sm font-normal text-slate-500">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="xs" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>Men Nike Shoe</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the
              risk of errors.
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray">
              <span className="pr-2">
                <ShoppingCart size={24} />
              </span>
              Add To Cart
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>

      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.prismic.io/staticmania/56ae80e7-4d23-4bd9-a2f3-01bd6f923a8b_product-2.avif?auto=compress,format"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="space-y-4 p-6">
          <Card.Title className="flex items-center gap-2 text-sm md:text-base font-medium text-slate-500">
            <MapPinLine size={20} color="#5E718D" />
            <span>Garden Street,Ring Road</span>
          </Card.Title>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Bed size={20} color="#5E718D" />
              <span>3 Bed Room</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shower size={20} color="#5E718D" />
              <span>1 Bath</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <ArrowsOutSimple size={20} color="#5E718D" />
              <span>1,032 sqft</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <Users size={20} color="#5E718D" />
              <span>Family</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="my-3 flex items-center justify-between">
            <Button type="primary" className="md:block hidden">
              Check Out
            </Button>
            <Button type="primary" size="xs" className="md:hidden block">
              Check Out
            </Button>
            <Card.Title className="text-lg md:text-2xl font-semibold text-slate-700">
              $649,00
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>

      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.prismic.io/staticmania/cb1a34d1-50a8-4b9c-b5e2-020d1c67e993_product-3.avif?auto=compress,format"
        imgSize="md"
      >
        <Card.Container className="space-y-3 p-6">
          <Card.Container>
            <Card.Title className="text-md md:text-xl font-semibold text-slate-700">
              Keep design podcast
            </Card.Title>
            <Card.Description className="text-sm font-medium text-slate-500">
              By Static Mania
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="text-xs font-medium text-slate-500">
              4:05
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-500">
              10:05
            </Card.Title>
          </Card.Container>
          <Progress progress={45} color="info" rounded={true} />
          <Card.Container className="flex items-center justify-between">
            <Button type="text" circle={true}>
              <Rows size={20} color="#5E718D" />
            </Button>
            <Card.Container className="flex items-center justify-between py-2">
              <Button type="text" circle={true}>
                <SkipBack size={24} color="#5E718D" weight="bold" />
              </Button>
              <PlayButton
                type="primary"
                circle={true}
                size="lg"
                icon={<Play size="21" />}
              />
              <Button type="text" circle={true}>
                <SkipForward size={24} color="#5E718D" weight="bold" />
              </Button>
            </Card.Container>
            <Button type="text" circle={true}>
              <SpeakerHigh size={20} color="#5E718D" />
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card
        className="overflow-hidden rounded-md md:!max-w-[478px] !max-w-xs"
        imgSrc="https://images.prismic.io/staticmania/56ae80e7-4d23-4bd9-a2f3-01bd6f923a8b_product-2.avif?auto=compress,format"
        imgSize="md"
        horizontal={true}
      >
        <Card.Container className="space-y-4 p-6">
          <Card.Title className="flex items-center gap-2 text-sm md:text-base font-medium text-slate-500">
            <MapPinLine size={20} color="#5E718D" />
            <span>Garden Street,Ring Road</span>
          </Card.Title>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Bed size={20} color="#5E718D" />
              <span>3 Bed Room</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shower size={20} color="#5E718D" />
              <span>1 Bath</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <ArrowsOutSimple size={20} color="#5E718D" />
              <span>1,032 sqft</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <Users size={20} color="#5E718D" />
              <span>Family</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="my-3 flex items-center justify-between">
            <Card.Title className="text-lg font-medium text-slate-500">
              $649,00
            </Card.Title>
            <Button type="primary" size="sm">
              Check Out
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="max-w-xs p-6">
        <Card.Container>
          <Card.Container className="h-[60px] w-[60px] bg-primary-25 flex items-center justify-center rounded-full">
            <Image
              src="/images/icon/pricing.png"
              height={24}
              width={24}
              alt="card"
            />
          </Card.Container>
          <Card.Container>
            <Card.Title className="text-xl font-medium text-primary-500">
              Business
            </Card.Title>
            <Card.Title className="flex items-center my-3">
              <span className="text-xl font-bold text-slate-800">$79</span>
              <span className="ml-1 text-base font-medium text-slate-400">
                / mth
              </span>
            </Card.Title>
            <Card.Description className="text-base text-slate-700">
              Until recently, the prevailing view assumed.
            </Card.Description>
          </Card.Container>
          <Card.Container tag="ul" className="my-4 space-y-5">
            <Card.List className="flex items-center gap-1.5">
              <CheckCircle size={24} color="#1B4DFF" />
              <span className="text-base text-slate-700">
                One Month Free Access
              </span>
            </Card.List>
            <Card.List className="flex items-center gap-1.5">
              <CheckCircle size={24} color="#1B4DFF" />
              <span className="text-base text-slate-700">
                All The Component Access
              </span>
            </Card.List>
            <Card.List className="flex items-center gap-1.5">
              <CheckCircle size={24} color="#1B4DFF" />
              <span className="text-base text-slate-700">
                Access Html Component
              </span>
            </Card.List>
            <Card.List className="flex items-center gap-1.5">
              <CheckCircle size={24} color="#1B4DFF" />
              <span className="text-base text-slate-700">
                Access React Component
              </span>
            </Card.List>
          </Card.Container>
          <Card.Container>
            <Button type="primary" width="full">
              Pro Access
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};
