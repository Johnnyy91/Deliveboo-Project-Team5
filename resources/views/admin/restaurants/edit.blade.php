@extends('layouts.app');

@section('content')

<form action="{{ route('admin.restaurants.update', $restaurant->slug) }}" method="post">
    @csrf
    @method('PATCH')
    <div>
        <label for="name">Name:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('name', $restaurant->name) }}">
        @error('name')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="p.iva">P.iva:</label>
        <input required maxlength="255" type="text" name="piva" value="{{ old('piva', $restaurant->piva) }}">
        @error('piva')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="address">Address:</label>
        <input required maxlength="255" type="text" name="address" value="{{ old('address', '') }}">
        @error('address')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        {{-- OPEN LUNCH --}}
        <span>Lunch  </span>
        <label for="lunch_time_slot_open">Open:</label>
        <input required maxlength="255" type="time" name="lunch_time_slot_open" value="{{ old('lunch_time_slot_open', '') }}">
        @error('lunch_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE LUNCH --}}
        <label for="lunch_time_slot_close">Close:</label>
        <input required maxlength="255" type="time" name="lunch_time_slot_close" value="{{ old('lunch_time_slot_close', '') }}">
        @error('lunch_time_slot_close')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        {{-- OPEN DINNER --}}
        <span>Dinner  </span>
        <label for="dinner_time_slot_open">Open:</label>
        <input required maxlength="255" type="time" name="dinner_time_slot_open" value="{{ old('dinner_time_slot_open', '') }}">
        @error('dinner_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE DINNER --}}
        <label for="dinner_time_slot_close">Close:</label>
        <input required maxlength="255" type="time" name="dinner_time_slot_close" value="{{ old('dinner_time_slot_close', '') }}">
        @error('dinner_time_slot_close')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    <div>
        <label for="image">Image:</label>
        <input type="file" name="image" disabled>
    </div>

    @if ($errors->any())
    <label for="typology_id">Typology:</label>
    <select name="typologies[]" id="typology_id" multiple>
    @foreach ($typologies as $typology )
        <option {{ in_array($typology->id, old('typology', [])) ? 'selected' : '' }}
        value="{{$typology->id}}">{{$typology->name}}</option>
    @endforeach
    </select>

    @else
    <label for="typology_id">Typology:</label>
    <select name="typologies[]" id="typology_id" multiple>
    @foreach ($typologies as $typology )
        <option {{ $restaurant->typologies->contains($typology) ? 'selected' : '' }}
        value="{{$typology->id}}">{{$typology->name}}</option>
    @endforeach
    </select>

    @endif

    <input type="submit" value="Create">
</form>


@endsection
