@extends('layouts.app') <!--estendo layout.app-->


@section('content')
{{-- {{ route('admin.restaurants.store') }} --}}
<form action="" method="post">
    <div>
        <label for="name">Name:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('name', '') }}">
        @error('name')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="p.iva">P.iva:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('piva', '') }}">
        @error('piva')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="address">Address:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('address', '') }}">
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
        <input required maxlength="255" type="time" name="name" value="{{ old('lunch_time_slot_open', '') }}">
        @error('lunch_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE LUNCH --}}
        <label for="lunch_time_slot_close">Close:</label>
        <input required maxlength="255" type="time" name="name" value="{{ old('lunch_time_slot_close', '') }}">
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
        <input required maxlength="255" type="time" name="name" value="{{ old('dinner_time_slot_open', '') }}">
        @error('dinner_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE DINNER --}}
        <label for="dinner_time_slot_close">Close:</label>
        <input required maxlength="255" type="time" name="name" value="{{ old('dinner_time_slot_close', '') }}">
        @error('dinner_time_slot_close')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="image">Image:</label>
        <input type="file" name="image">
    </div>
    <input type="submit" value="Create">
</form>

@foreach ($restaurants as $item)

@if ($item->user_id == $user->id) {

   {{$item->name}}
}

@endif



@endforeach

@endsection
