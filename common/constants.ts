import {CoursesListItem} from 'src/app/courses/courses-list-item.module';
import { Person } from 'src/app/users/person.module';

export class Constants {

    public courses : CoursesListItem[] = [
        {
          id : 1,
          title: `first course`,
          creationDate: 1573493111111,
          duration: 1000*61*20,
          description: 'This is an awesome video!',
          topRated: true,
        },
        {
          id : 2,
          title: 'second course',
          creationDate: 1575193111111,
          duration: 1000*62*35,
          description: 'This is an awesome video!',
          topRated: false,
        },
        {
          id : 3,
          title: 'third course 3',
          creationDate: 1572041122222,
          duration: 1000*63*75,
          description: 'This is an awesome video!',
          topRated: true,
        },
      ]

      public persons : Person[] = [
        {id: 1, firstname: "bob", lastname: 'smith'},
        {id: 2, firstname: 'maria', lastname: 'wolf'},
        {id: 3, firstname: 'habib', lastname: 'nurmur'}
      ]
}