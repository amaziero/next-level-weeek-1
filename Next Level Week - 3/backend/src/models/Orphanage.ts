import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  // indica o tipo do relacionamento
  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ['insert', 'update'],
  })

  // indica qual coluna que tem a foreing key
  @JoinColumn({ name: 'orpahanage_id' })
  // importo a entity Image criada na folder models para que eu possa indicar qual o objeto que se refere
  // o campo 'images' aqui inserido, note que esse campo não tem nessa tabela, ele será usado para ser
  // inferido pela função POST no momento que a rota for chamada.
  images: Image[];
}
