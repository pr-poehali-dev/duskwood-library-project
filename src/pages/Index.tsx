import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Icon from "@/components/ui/icon";

const featuredBooks = [
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 text-primary">
            Добро пожаловать в Дасквуд
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя коллекцию мистических книг и интерактивных
            историй, скрытых в темных углах нашей библиотеки
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/catalog"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <Icon name="BookOpen" size={20} />
              <span>Посмотреть каталог</span>
            </a>
            <a
              href="/search"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors flex items-center space-x-2"
            >
              <Icon name="Search" size={20} />
              <span>Начать поиск</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Рекомендуемые издания</h3>
            <p className="text-muted-foreground">
              Самые популярные книги и игры из нашей коллекции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <p className="text-muted-foreground">Уникальных изданий</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Книг</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <p className="text-muted-foreground">Интерактивных игр</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
