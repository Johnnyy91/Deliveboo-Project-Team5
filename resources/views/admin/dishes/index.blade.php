@extends('layouts.app') <!--estendo layout.app-->

@section('content')

<h1 class="text-center ">MENU'</h1>
@foreach ($dishes as $item)

<div class="text-center">
    Piatto: {{$item->name}} <span class="mx-5">Prezzo:{{$item->price}} EURO</span>

    <div class="w-100">
       <img class="w-50" src="{{asset('storage/'.$item->img)}}" alt="img">
    </div>

    {{-- DELETE --}}
    <form class="mt-3" method="POST" action="{{ route('admin.dishes.destroy', $item->id) }}">
        @csrf
        @method('DELETE')
        <input class="btn btn-danger mb-3"onclick="return confirm('Vuoi davvero eliminare il piatto?')" type="submit" value="Elimina">
    </form>


     {{-- EDIT  --}}
        <div><a class="btn btn-info my-3 mx-3" href="{{ route('admin.dishes.edit', $item->id) }}">Modifica Piatto</a></div>




</div>

@endforeach
@endsection

<style>

label {
        width: 60px;
        padding-bottom: 10px;
    }
</style>
