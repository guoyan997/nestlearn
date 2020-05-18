import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from 'typeorm';

@Entity()
class City extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: string;

  @Column({ type: 'char', name: 'Name', length: 35 })
  name: string;

  @Column({ type: 'char', name: 'CountryCode', length: 3 })
  code: string;

  @Column({ type: 'char', name: 'District', length: 20 })
  district: string;

  @Column({ type: 'int', name: 'Population' })
  population: number;
}
export { City as Country };
