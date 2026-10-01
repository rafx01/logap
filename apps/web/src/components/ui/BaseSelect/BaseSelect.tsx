import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SelectOption = {
  value: string;
  label: string;
};

type props = {
  placeholder: string;
  items?: SelectOption[];
  value?: string | null;
  onChange?: (value: string | null) => void;
};

export function BaseSelect({
  placeholder,
  items = [],
  value,
  onChange,
}: props) {
  return (
    <Select
      items={items}
      value={value}
      onValueChange={(newValue) => onChange?.(newValue)}
    >
      <SelectTrigger className="w-64">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
