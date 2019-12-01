import { CoursesListItem } from 'src/app/courses/courses-list-item.module';
import { Person } from 'src/app/users/person.module';

export class Constants {
  public courses: CoursesListItem[] = [
    {
      id: 1,
      title: `first course`,
      creationDate: 1575793111111,
      duration: 1000 * 60 * 20,
      description: 'This is an awesome video!',
      topRated: true,
    },
    {
      id: 2,
      title: 'second course',
      creationDate: 1577193111111,
      duration: 1000 * 60 * 35,
      description: 'This is an awesome video!',
      topRated: false,
    },
    {
      id: 3,
      title: 'third course',
      creationDate: 1579041122222,
      duration: 1000 * 60 * 75,
      description: 'This is an awesome video!',
      topRated: true,
    },
    {
      id: 4,
      title: 'four course',
      creationDate: 1574941122222,
      duration: 1000 * 60 * 125,
      description: 'This is an awesome video!',
      topRated: true,
    },
    {
      id: 5,
      title: 'five course',
      creationDate: 1572841122222,
      duration: 1000 * 60 * 10,
      description: 'This is an awesome video!',
      topRated: false,
    },
  ];

  public persons: Person[] = [
    { id: 1, firstname: 'bob', lastname: 'smith' },
    { id: 2, firstname: 'maria', lastname: 'wolf' },
    { id: 3, firstname: 'habib', lastname: 'nurmur' },
  ];
}
