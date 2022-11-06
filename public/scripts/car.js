class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card shadow-sm border-0 flex-fill"style="height: 100%;">
    <div class="p-2 img-container">
      <img src="${this.image}" alt="${this.manufacture}" class="card-img-top img-center rounded" width="150px" height="300px"/>
    </div>
    <div class="card-body d-flex flex-column mt-3 gy-3">
      <p>${this.manufacture}/${this.model}</p>
      <h5><b>${this.rentPerDay.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
      })} / hari</b></h5>
      <p>${this.description}</p>
      <p><i class="feather-10" data-feather="circle"></i> ${
        this.capacity
      } orang</p>
      <p><i class=""></i> ${
        this.transmission
      }</p>
      <p><i class="feather-10" data-feather="calendar"></i> Tahun: ${
        this.year
      }</p>
      <p>Tersedia: ${new Date(this.availableAt).toLocaleString()}</p>
     
    </div>
    <button
    type="button" class="btn btn-success" style="background-color: #4CAF50;">Pilih Mobil
  </button>
  </div>
</div>
    `;
  }
}
