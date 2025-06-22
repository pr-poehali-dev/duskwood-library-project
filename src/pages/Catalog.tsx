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
      "https://i.pinimg.com/736x/09/b8/dd/09b8dd289144f54e863e0928f615fc1f.jpg",
    link: "https://interactive-book-vendetta--preview.poehali.dev/",
    description: "Интерактивная графическая новелла о борьбе за свободу",
  },
  {
    id: 2,
    title: "Сад и огород 101 совет",
    author: "Катрин Освальд",
    type: "book" as const,
    image:
      "https://i.pinimg.com/736x/0d/b5/47/0db547fd818f4680cfacfb65534d69bb.jpg",
    description: "Практическое руководство по садоводству",
  },
  {
    id: 3,
    title: "Архитектура Дасквуда",
    author: "Сэмюэль Р.",
    type: "book" as const,
    image:
      "https://i.pinimg.com/736x/1a/10/49/1a10499bcf41685218b149b19538a5a2.jpg",
    description: "История архитектуры мистического города",
  },
  {
    id: 4,
    title: "Чума в Дасквуде",
    author: "Карстен Джерико",
    type: "book" as const,
    image:
      "https://i.pinimg.com/736x/00/a0/21/00a02143c4dca82ebfa829a3cea44c1f.jpg",
    description: "Хроника эпидемии в средневековом городе",
  },
  {
    id: 5,
    title: "Полночь в Дасквуде",
    author: "С. Куин",
    type: "book" as const,
    image:
      "https://i.pinimg.com/736x/52/79/08/5279085d8852503a31fb3640de695aa8.jpg",
    description: "Мистический триллер в темных улицах города",
  },
  {
    id: 6,
    title: "Флора и Фауна",
    author: "Адам П.",
    type: "book" as const,
    image:
      "https://i.pinimg.com/736x/15/e9/6c/15e96ce334c761bdaf7b995e1936e084.jpg",
    description: "Энциклопедия природы Дасквуда",
  },
  {
    id: 7,
    title: "Мертвый город",
    author: "Everbyte Studio",
    type: "game" as const,
    image:
      "https://everbytestudio.com/wp-content/uploads/2018/11/Text-Adventure-Dead-City-Android-iOS.jpg",
    description: "Детективная игра с элементами хоррора",
  },
  {
    id: 8,
    title: "Moonvale",
    author: "Everbyte Studio",
    type: "game" as const,
    image:
      "https://everbytestudio.com/wp-content/uploads/2023/05/MOONVALE-Web-Selection-Button.jpg",
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
