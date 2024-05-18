export class Guest {
  id: number | undefined;
  name: string | null | undefined;
  note: string | null | undefined;

  constructor(name: string | null | undefined, note: string | null | undefined) {
    this.id = undefined;
    this.name = name;
    this.note = note;
  }

}
