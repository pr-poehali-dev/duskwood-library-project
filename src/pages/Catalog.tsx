import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Icon from "@/components/ui/icon";

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

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Каталог книг</h1>
          <p className="text-muted-foreground text-lg">
            Полная коллекция книг и интерактивных историй библиотеки Дасквуд
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Icon name="BookOpen" size={20} className="text-primary" />
            <span className="text-foreground">
              Всего изданий: {allBooks.length}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>{allBooks.filter((b) => b.type === "book").length} книг</span>
            <span>•</span>
            <span>{allBooks.filter((b) => b.type === "game").length} игр</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
