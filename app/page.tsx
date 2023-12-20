import { AccordionComponent } from "@/components/AccordionComponent";
import { AlertComponent } from "@/components/AlertComponent";
import { AreaChartComponent } from "@/components/AreaChartComponent";
import { AvatarComponent } from "@/components/AvatarComponent";
import { BadgeComponent } from "@/components/BadgeComponent";
import { BreadcrumbComponent } from "@/components/BreadcrumbComponent";
import { ButtonGroupComponent } from "@/components/ButtonComponent";
import { CardComponent } from "@/components/CardComponent";
import { CarouselComponent } from "@/components/CarouselComponent";
import { CheckboxGroupComponent } from "@/components/CheckGroupComponent";
import { CheckboxComponent } from "@/components/CheckboxComponent";
import { DatePickerComponent } from "@/components/DatePickerComponent";
import { EmptyComponent } from "@/components/EmptyComponent";
import { NotificationComponent } from "@/components/NotificationComponent";
import { PaginationComponent } from "@/components/PaginationComponent";
import { PopoverComponent } from "@/components/PopoverComponent";
import { ProgressComponent } from "@/components/ProgressComponent";
import { RadioComponent } from "@/components/RadioComponent";
import { RatingComponent } from "@/components/RatingComponent";
import { SearchBarComponent } from "@/components/SearchComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { SkeletonComponent } from "@/components/SkeletonComponent";
import { SliderComponent } from "@/components/SliderComponent";
import { SpinnerComponent } from "@/components/SpinnerComponent";
import { StatisticComponent } from "@/components/StatisticComponent";
import { StepComponent } from "@/components/StepComponent";
import { SwitchComponent } from "@/components/SwitchComponent";
import { TableComponent } from "@/components/TableComponent";
import { TabsComponent } from "@/components/TabsComponent";
import { TagComponent } from "@/components/TagComponent";
import { TooltipComponent } from "@/components/TooltipComponent";

const Home = () => {
  return (
    <main className="bg-white">
      <div className="container py-10">
        <div className="py-5 space-y-5">
          <CarouselComponent />
          <TooltipComponent />
          <AlertComponent />
          <AccordionComponent />
          <AvatarComponent />
          <AreaChartComponent />
          <BadgeComponent />
          <BreadcrumbComponent />
          <ButtonGroupComponent />
          <CardComponent />
          <TabsComponent />
          <CheckboxComponent />
          <TagComponent />
          <CheckboxGroupComponent />
          <DatePickerComponent />
          <EmptyComponent />
          <NotificationComponent />
          <PaginationComponent />
          <ProgressComponent />
          <PopoverComponent />
          <RadioComponent />
          <RatingComponent />
          <SearchBarComponent />
          <SidebarComponent />
          <SkeletonComponent />
          <SliderComponent />
          <SpinnerComponent />
          <StatisticComponent />
          <StepComponent />
          <SwitchComponent />
          <TableComponent />
        </div>
      </div>
    </main>
  );
};

export default Home;
