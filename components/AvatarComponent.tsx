"use client";
import { Avatar } from "keep-react";

export const AvatarComponent = () => {
  return (
    <div className="flex items-end flex-wrap gap-3">
      <Avatar shape="circle" />
      <Avatar shape="rounded" />
      <Avatar shape="square" />
      <Avatar shape="square" size="xs" />
      <Avatar shape="square" size="sm" />
      <Avatar shape="square" size="md" />
      <Avatar shape="square" size="lg" />
      <Avatar shape="square" size="xl" />
      <Avatar shape="square" size="2xl" />
      <Avatar
        shape="circle"
        size="xl"
        status="online"
        statusPosition="bottom-left"
        img="./images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="offline"
        statusPosition="bottom-right"
        img="./images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="busy"
        statusPosition="top-left"
        img="./images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="away"
        statusPosition="top-right"
        img="./images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        statusType="notification"
        status="online"
        statusPosition="bottom-left"
        totalNotification={99}
        img="./images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="offline"
        statusType="notification"
        statusPosition="bottom-right"
        totalNotification={99}
        img="./images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="busy"
        statusPosition="top-left"
        statusType="notification"
        totalNotification={99}
        img="./images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="away"
        bordered
        statusPosition="top-right"
        statusType="notification"
        totalNotification={99}
        img="./images/avatar/avatar-4.png"
      />

      <Avatar.Group>
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-1.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-2.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-3.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-4.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-5.png"
        />
        <Avatar shape="circle" size="md" stacked={true} />
        <Avatar shape="circle" size="md" stacked={true} />
      </Avatar.Group>

      <Avatar.Group>
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-1.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-2.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-3.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-4.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-5.png"
        />
        <Avatar shape="circle" size="md" stacked={true} />
        <Avatar shape="circle" size="md" stacked={true} />
        <Avatar.Add
          icon="/images/icon/plus.png"
          bg="#444D61"
          size="md"
          ringColor="ring-[#444D61]"
          iconColor="text-white"
        />
      </Avatar.Group>
      <Avatar.Group>
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-1.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-2.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-3.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-4.png"
        />
        <Avatar
          shape="circle"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-5.png"
        />
        <Avatar shape="circle" size="md" stacked={true} />
        <Avatar.Counter size="md" total={99} href="/" />
        <Avatar.Add
          icon="/images/icon/plus.png"
          bg="#444D61"
          size="md"
          ringColor="ring-[#444D61]"
          iconColor="text-white"
        />
      </Avatar.Group>
    </div>
  );
};
