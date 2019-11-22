import {CoursesListItem} from 'src/app/courses/courses-list-item.module';
import { Person } from 'src/app/users/person.module';

export class Constants {

    public courses : CoursesListItem[] = [
        {
          id : 1,
          title: `Video course 1`,
          creationDate: 1573493111111,
          duration: 1000*60*20,
          description: 'This is an awesome video!',
        },
        {
          id : 2,
          title: 'Video course 2',
          creationDate: 1575193111111,
          duration: 1000*60*35,
          description: 'This is an awesome video!',
        },
        {
          id : 3,
          title: 'Video course 3',
          creationDate: 1572041122222,
          duration: 1000*60*75,
          description: 'This is an awesome video!',
        },
      ]

      public persons : Person[] = [
        {id: 1, firstname: "bob", lastname: 'smith'},
        {id: 2, firstname: 'maria', lastname: 'wolf'},
        {id: 3, firstname: 'habib', lastname: 'nurmur'}
      ]
}