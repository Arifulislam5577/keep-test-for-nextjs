"use client";
import { Badge } from "keep-react";
import {
  Crown,
  ShieldCheck,
  Check,
  Checks,
  CloudCheck,
  XCircle,
} from "phosphor-react";

export const BadgeComponent = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge size="xs" colorType="light" color="info">
        Default
      </Badge>
      <Badge size="xs" colorType="light" color="gray">
        Gray Badge
      </Badge>
      <Badge size="xs" colorType="light" color="error">
        Error Badges
      </Badge>
      <Badge size="xs" colorType="light" color="success">
        Success Badges
      </Badge>
      <Badge size="xs" colorType="light" color="warning">
        Warning Badges
      </Badge>
      <Badge size="xs" colorType="light" color="info">
        Extra Small
      </Badge>
      <Badge size="sm" colorType="light" color="gray">
        Small Badge
      </Badge>
      <Badge size="sm" colorType="light" color="info">
        Badge
      </Badge>
      <Badge size="sm" colorType="strong" color="info">
        Badge
      </Badge>
      <Badge size="sm" colorType="strong" badgeType="text" color="info">
        Badge
      </Badge>
      <Badge
        size="sm"
        colorType="strong"
        color="info"
        icon={<Crown size={18} />}
        iconPosition="left"
      >
        Badges
      </Badge>
      <Badge
        size="sm"
        colorType="light"
        color="info"
        icon={<ShieldCheck size={18} />}
        iconPosition="right"
      >
        Badges
      </Badge>
      <Badge
        size="xs"
        dot={true}
        dotPosition="left"
        colorType="light"
        color="gray"
      >
        Left Dot
      </Badge>
      <Badge
        size="xs"
        dot={true}
        dotPosition="right"
        colorType="light"
        color="gray"
      >
        Right Dot
      </Badge>
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="info"
        icon={<Check size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="gray"
        icon={<Check size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="error"
        icon={<XCircle size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="success"
        icon={<Checks size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="warning"
        icon={<CloudCheck size={20} weight="light" />}
        iconPosition="right"
      />
    </div>
  );
};
