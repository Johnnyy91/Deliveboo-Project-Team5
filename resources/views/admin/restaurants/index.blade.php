@extends('layouts.app') <!--estendo layout.app-->


@section('content')

{{-- CONTROLLER CREATE --}}
<?php $val = false ?>
@foreach ($restaurants as $item)
@if ($item->user_id == $user->id)
    <?php $val = true ?>
@endif
@endforeach

{{-- CREATE --}}
@if (!$val)
<form action="{{ route('admin.restaurants.store') }}" method="post">
    @csrf

    {{-- NAME --}}
    <div>
        <label for="name">Name:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('name', '') }}">
        @error('name')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- P.IVA --}}
    <div>
        <label for="p.iva">P.iva:</label>
        <input required maxlength="11" type="text" name="piva" value="{{ old('piva', '') }}">
        @error('piva')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- ADDRESS --}}
    <div>
        <label for="address">Address:</label>
        <input required maxlength="255" type="text" name="address" value="{{ old('address', '') }}">
        @error('address')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- TIME SLOTS --}}
    <div>
        {{-- OPEN LUNCH --}}
        <span>Lunch  </span>
        <label for="lunch_time_slot_open">Open:</label>
        <input required type="time" name="lunch_time_slot_open" value="{{ old('lunch_time_slot_open', '') }}">
        @error('lunch_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE LUNCH --}}
        <label for="lunch_time_slot_close">Close:</label>
        <input required type="time" name="lunch_time_slot_close" value="{{ old('lunch_time_slot_close', '') }}">
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
        <input required type="time" name="dinner_time_slot_open" value="{{ old('dinner_time_slot_open', '') }}">
        @error('dinner_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE DINNER --}}
        <label for="dinner_time_slot_close">Close:</label>
            <input required type="time" name="dinner_time_slot_close" value="{{ old('dinner_time_slot_close', '') }}">
            @error('dinner_time_slot_close')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- IMAGE --}}
    <div>
        <label for="image">Image:</label>
        <input type="file" name="image" disabled>
    </div>

    {{-- TYOPOLOGIES --}}
    <label for="typology_id">Typology:</label>
        <select name="typologies[]" id="typology_id" multiple>
            @foreach ($typologies as $typology )
                <option   {{ in_array($typology->id, old('typology', [])) ? 'selected' : '' }}
                value="{{$typology->id}}">{{$typology->name}}
                </option>
            @endforeach
    </select>

    {{-- SUBMIT --}}
    <input type="submit" value="Create">
</form>

 @else

@foreach ($restaurants as $item)

@if ($item->user_id == $user->id)



nome ristorante:  {{$item->name}}
<div>
    Tipologie:
    @foreach ($item->typologies as $typology)
        {{$typology->name}}
    @endforeach
</div>


    {{-- DELETE --}}

    <div class="d-flex">

        <form class="mt-3" method="POST" action="{{ route('admin.restaurants.destroy', $item->slug) }}">
            @csrf
            @method('DELETE')
            <input class="btn btn-success mb-3"onclick="return confirm('Do you really want to delete this restaurant?')" type="submit" value="Delete">
        </form>

        {{-- EDIT  --}}
        <a class="btn btn-warning my-3 mx-3" href="{{ route('admin.restaurants.edit', $item->slug) }}">Edit Restaurant</a>


        {{-- ADD DISH--}}
        <a class="btn btn-info my-3 mx-3" href="{{ route('admin.dishes.create') }}">Add Dish</a>

        {{-- VIEW MENU'--}}
        <a class="btn btn-info my-3 mx-3" href="{{ route('admin.dishes.index') }}">View Menù</a>
    </div>



@endif



@endforeach
 @endif
@endsection
