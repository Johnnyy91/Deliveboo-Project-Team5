@extends('layouts.app') <!--estendo layout.app-->

@section('content')

<h1>MENU'</h1>
@foreach ($dishes as $item)


    Name:{{$item->name}} <span class="mx-5">Price:{{$item->price}}</span>

    <div class="w-100">
       <img class="w-25" src="{{asset('storage/'.$item->img)}}" alt="img">
    </div>

    {{-- DELETE --}}
    <form class="mt-3" method="POST" action="{{ route('admin.dishes.destroy', $item->id) }}">
        @csrf
        @method('DELETE')
        <input class="btn btn-success mb-3"onclick="return confirm('Do you really want to delete this dish?')" type="submit" value="Delete">
    </form>


     {{-- EDIT  --}}
        <div><a class="btn btn-warning my-3 mx-3" href="{{ route('admin.dishes.edit', $item->id) }}">Edit Dishes</a></div>


@endforeach
@endsection
