/** Dependencies */
import { NodeBlock, Slots, conditions, editor, slots, tripetto } from 'tripetto';

@tripetto({
  type: 'node',
  identifier: 'example',
  label: 'Example block',
  icon:
    // tslint:disable-next-line:max-line-length
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggZD0iTTE2LjUzNCAxNS43NDVsLTQuNTM0LTguMzcxdi00Ljc3M2MwLjYwMy0wLjI0NiAxLTAuNjA5IDEtMS4xMDEgMC0xLjAzNi0xLjc1OC0xLjUtMy41LTEuNXMtMy41IDAuNDY0LTMuNSAxLjVjMCAwLjQ5MiAwLjM5NyAwLjg1NSAxIDEuMTAxdjQuNzczbC00LjUzNCA4LjM3MWMtMC41OTQgMS4wOTctMC42NTEgMi4xNTQtMC4xNiAyLjk3OHMxLjQ0OCAxLjI3NyAyLjY5NSAxLjI3N2g5YzEuMjQ3IDAgMi4yMDQtMC40NTQgMi42OTUtMS4yNzdzMC40MzQtMS44ODEtMC4xNi0yLjk3OHpNOS41IDFjMS4zODIgMCAyLjIyIDAuMzE1IDIuNDU1IDAuNS0wLjIzNSAwLjE4NS0xLjA3MyAwLjUtMi40NTUgMC41cy0yLjIyLTAuMzE1LTIuNDU1LTAuNWMwLjIzNS0wLjE4NSAxLjA3My0wLjUgMi40NTUtMC41ek05LjUgM2MwLjUxNCAwIDEuMDI5LTAuMDQwIDEuNS0wLjEyNHY0LjYyMmMtMCAwLjAxOCAwLjAwMSAwLjAzNSAwLjAwMyAwLjA1MyAwIDAuMDAzIDAuMDAxIDAuMDA1IDAuMDAxIDAuMDA4IDAuMDAyIDAuMDEzIDAuMDAzIDAuMDI3IDAuMDA2IDAuMDQwIDAuMDAyIDAuMDA4IDAuMDA0IDAuMDE2IDAuMDA2IDAuMDI0czAuMDA0IDAuMDE1IDAuMDA2IDAuMDIzIDAuMDA5IDAuMDI3IDAuMDE1IDAuMDQxYzAuMDAxIDAuMDAyIDAuMDAxIDAuMDA0IDAuMDAyIDAuMDA2IDAuMDA3IDAuMDE2IDAuMDE1IDAuMDMyIDAuMDIzIDAuMDQ4bDMuMzkgNi4yNTljLTAuNzI2LTAuMDEzLTEuMjIyLTAuMzIxLTEuODczLTAuODc5LTAuNDE4LTAuMzU4LTAuOTYyLTAuODA0LTEuNTgtMS4xODYtMC4wMzUtMS4wNzMtMC45MTctMS45MzUtMS45OTgtMS45MzUtMC43NTggMC0xLjQxOSAwLjQyNC0xLjc1OCAxLjA0OC0wLjQzIDAuMDU0LTAuODUxIDAuMTU1LTEuMjU3IDAuM2wxLjk1NC0zLjYwOGMwLjAwOC0wLjAxNSAwLjAxNi0wLjAzMSAwLjAyMy0wLjA0NyAwLjAwMS0wLjAwMyAwLjAwMi0wLjAwNSAwLjAwMy0wLjAwOCAwLjAwNS0wLjAxMyAwLjAxMC0wLjAyNSAwLjAxNC0wLjAzOCAwLjAwMi0wLjAwOCAwLjAwNC0wLjAxNiAwLjAwNi0wLjAyNHMwLjAwNC0wLjAxNSAwLjAwNi0wLjAyMyAwLjAwNS0wLjAyOCAwLjAwNi0wLjA0MmMwLTAuMDAyIDAuMDAxLTAuMDA0IDAuMDAxLTAuMDA3IDAuMDAyLTAuMDE4IDAuMDAzLTAuMDM1IDAuMDAzLTAuMDUzdi00LjYyMmMwLjQ3MSAwLjA4MyAwLjk4NiAwLjEyNCAxLjUgMC4xMjR6TTkgMTFjMC41NTEgMCAxIDAuNDQ5IDEgMXMtMC40NDkgMS0xIDEtMS0wLjQ0OS0xLTEgMC40NDktMSAxLTF6TTE1LjgzNiAxOC4yMTFjLTAuMzAzIDAuNTA5LTAuOTU1IDAuNzg5LTEuODM2IDAuNzg5aC05Yy0wLjg4MSAwLTEuNTMzLTAuMjgtMS44MzYtMC43ODlzLTAuMjM5LTEuMjE2IDAuMTgxLTEuOTlsMS44MDItMy4zMjdjMC41Ni0wLjM5IDEuMTkxLTAuNjU5IDEuODU2LTAuNzk0IDAuMDUyIDEuMDU2IDAuOTI4IDEuOSAxLjk5NyAxLjkgMC43NTMgMCAxLjQxLTAuNDE4IDEuNzUxLTEuMDM0IDAuNDQ5IDAuMzAzIDAuODUzIDAuNjM2IDEuMTc3IDAuOTE0IDAuODA3IDAuNjkyIDEuNTE5IDEuMTIgMi41NzIgMS4xMiAwLjE2IDAgMC4zMTktMC4wMTEgMC40NzYtMC4wMzNsMC42NzkgMS4yNTRjMC40MTkgMC43NzQgMC40ODQgMS40ODEgMC4xODEgMS45OXoiIGNsYXNzPSJ0cmlwZXR0by1maWxsIj48L3BhdGg+CjxwYXRoIGQ9Ik02LjUgMTVjLTAuODI3IDAtMS41IDAuNjczLTEuNSAxLjVzMC42NzMgMS41IDEuNSAxLjUgMS41LTAuNjczIDEuNS0xLjUtMC42NzMtMS41LTEuNS0xLjV6TTYuNSAxN2MtMC4yNzYgMC0wLjUtMC4yMjQtMC41LTAuNXMwLjIyNC0wLjUgMC41LTAuNSAwLjUgMC4yMjQgMC41IDAuNS0wLjIyNCAwLjUtMC41IDAuNXoiIGNsYXNzPSJ0cmlwZXR0by1maWxsIj48L3BhdGg+CjxwYXRoIGQ9Ik05LjUgMTVjLTAuMTMyIDAtMC4yNiAwLjA1My0wLjM1MyAwLjE0N3MtMC4xNDcgMC4yMjItMC4xNDcgMC4zNTMgMC4wNTMgMC4yNjEgMC4xNDcgMC4zNTNjMC4wOTMgMC4wOTMgMC4yMjIgMC4xNDcgMC4zNTMgMC4xNDdzMC4yNjEtMC4wNTMgMC4zNTMtMC4xNDdjMC4wOTMtMC4wOTMgMC4xNDctMC4yMjIgMC4xNDctMC4zNTNzLTAuMDUzLTAuMjYxLTAuMTQ3LTAuMzUzYy0wLjA5My0wLjA5My0wLjIyMi0wLjE0Ny0wLjM1My0wLjE0N3oiIGNsYXNzPSJ0cmlwZXR0by1maWxsIj48L3BhdGg+Cjwvc3ZnPgo='
})
export class Example extends NodeBlock {
  exampleSlot: Slots.String;

  @slots
  defineSlot(): void {
    // Define your data slots here...

    this.exampleSlot = this.slots.static({
      type: Slots.String,
      reference: 'example-slot',
      label: 'Example slot'
    });
  }

  @editor
  defineEditor(): void {
    // Define controls to edit your properties here...

    this.editor.name();
    this.editor.description();
    this.editor.placeholder();
    this.editor.explanation();

    this.editor.groups.options();
    this.editor.required(this.exampleSlot);
    this.editor.visibility();
  }

  @conditions
  defineConditions(): void {
    // Define conditions here...
  }
}
