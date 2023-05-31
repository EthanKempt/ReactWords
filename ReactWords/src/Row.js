import Column from './Column';

export default function Row({ id }) {
  return (
    <div>
      <Column id='1' rowid={id} />
      <Column id='2' rowid={id} />
      <Column id='3' rowid={id} />
      <Column id='4' rowid={id} />
      <Column id='5' rowid={id} />
    </div>
  );
}