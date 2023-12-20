"use client";
import { Tabs } from "keep-react";

export const TabsComponent = () => {
  return (
    <div className="space-y-5">
      <Tabs aria-label="Keep Tabs" style="default">
        <Tabs.Item
          title="Inbox"
          notification={20}
          notificationColor="info"
          className="focus:!outline-none"
        >
          Inbox content
        </Tabs.Item>
        <Tabs.Item title="Cart" notification={12} notificationColor="info">
          Cart content
        </Tabs.Item>
        <Tabs.Item
          title="Notification"
          notification={99}
          notificationColor="info"
        >
          Notification
        </Tabs.Item>
        <Tabs.Item title="Message" notification="new" notificationColor="info">
          Message content
        </Tabs.Item>
      </Tabs>

      <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
        <Tabs.Item title="Profile">Profile content</Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  );
};
