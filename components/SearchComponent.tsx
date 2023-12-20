"use client";
import { useState } from "react";
import { SearchBar, Button, Dropdown } from "keep-react";
import { ArrowRight, MapPinLine } from "phosphor-react";

interface Book {
  id: number;
  name: string;
}
const books: Book[] = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "Pride and Prejudice" },
  { id: 3, name: "1984" },
  { id: 4, name: "The Great Gatsby" },
  { id: 5, name: "Moby Dick" },
  { id: 6, name: "The Catcher in the Rye" },
  { id: 7, name: "Jane Eyre" },
  { id: 8, name: "The Lord of the Rings" },
  { id: 9, name: "To the Lighthouse" },
  { id: 10, name: "Brave New World" },
];

export const SearchBarComponent = () => {
  const [data, setData] = useState<Book[]>([]);
  const handleOnChange = (event: { target: { value: string } }) => {
    const searchTerm = event.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );
    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };
  return (
    <SearchBar
      placeholder="Search Anything"
      bordered={false}
      addon={
        <Button type="primary" color="info" size="xs">
          Search
        </Button>
      }
      addonPosition="right"
      icon={
        <Button type="text" color="info" size="xs">
          <span className="mr-2">
            <MapPinLine size={24} color="#5E718D" />
          </span>
          Location
        </Button>
      }
      iconPosition="right"
      handleOnChange={handleOnChange}
      size="lg"
      color="info"
    >
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  );
};
