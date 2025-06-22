import { useState, useMemo } from "react";
import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allBooks = [
  {
    id: 1,
    title: "V - значит Вендетта",
    author: "Алан Мур",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    link: "https://interactive-book-vendetta--preview.poehali.dev/",
    description: "Интерактивная графическая новелла о борьбе за свободу",
  },
  {
    id: 2,
    title: "Сад и огород 101 совет",
    author: "Катрин Освальд",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop",
    description: "Практическое руководство по садоводству",
  },
  {
    id: 3,
    title: "Архитектура Дасквуда",
    author: "Сэмюэль Р.",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1590856029826-c7d73bb642bd?w=300&h=400&fit=crop",
    description: "История архитектуры мистического города",
  },
  {
    id: 4,
    title: "Чума в Дасквуде",
    author: "Карстен Джерико",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    description: "Хроника эпидемии в средневековом городе",
  },
  {
    id: 5,
    title: "Полночь в Дасквуде",
    author: "С. Куин",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    description: "Мистический триллер в темных улицах города",
  },
  {
    id: 6,
    title: "Флора и Фауна",
    author: "Адам П.",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=400&fit=crop",
    description: "Энциклопедия природы Дасквуда",
  },
  {
    id: 7,
    title: "Мертвый город",
    author: "Everbyte Studio",
    type: "game" as const,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop",
    description: "Детективная игра с элементами хоррора",
  },
  {
    id: 8,
    title: "Moonvale",
    author: "Everbyte Studio",
    type: "game" as const,
    image:
      "https://images.unsplash.com/photo-1580234820419-525ceccf18fc?w=300&h=400&fit=crop",
    description: "Мистическая приключенческая игра",
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "book" | "game">(
    "all",
  );

  const filteredBooks = useMemo(() => {
    return allBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "all" || book.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Поиск по библиотеке</h1>
          <p className="text-muted-foreground text-lg">
            Найдите нужную книгу или игру в нашей коллекции
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-card p-6 rounded-lg shadow-lg mb-8">
          <div className="space-y-4">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="text"
                placeholder="Поиск по названию, автору или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Тип:</span>
              <div className="flex space-x-2">
                {[
                  { value: "all", label: "Все" },
                  { value: "book", label: "Книги" },
                  { value: "game", label: "Игры" },
                ].map((type) => (
                  <Button
                    key={type.value}
                    variant={
                      selectedType === type.value ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedType(type.value as any)}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Результаты поиска</h2>
            <span className="text-muted-foreground">
              Найдено: {filteredBooks.length} из {allBooks.length}
            </span>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="text-center py-16">
            <Icon
              name="BookX"
              size={64}
              className="mx-auto text-muted-foreground mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
