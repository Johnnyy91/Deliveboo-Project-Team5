@extends('layouts.app') <!--estendo layout.app-->


@section('content')
{{--  --}}
{{-- TODO @if ($restaurants) --}}

<form action="{{ route('admin.restaurants.store') }}" method="post">
    @csrf
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
        <input required maxlength="255" type="text" name="piva" value="{{ old('piva', '') }}">
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
    <input type="submit" value="Create">
</form>

{{-- @else --}}

@foreach ($restaurants as $item)

@if ($item->user_id == $user->id)

    {{$item->name}}
    {{-- DELETE --}}

    <div class="d-flex flex-column">

        <form class="mt-3" method="POST" action="{{ route('admin.restaurants.destroy', $item->slug) }}">
            @csrf
            @method('DELETE')
            <input class="btn btn-success mb-3"onclick="return confirm('Do you really want to delete this restaurant?')" type="submit" value="Delete">
        </form>

        {{-- EDIT  --}}
        <a class="btn btn-warning" href="{{ route('admin.restaurants.edit', $item->slug) }}">Edit Restaurant</a>
    </div>



@endif



@endforeach
{{-- @endif --}}
@endsection
